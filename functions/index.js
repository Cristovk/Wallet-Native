
//inicializacion FIREBASE functions
//llamado a EXPRESS
const functions = require("firebase-functions");
const express = require("express");
const ex = express();
const admin = require("firebase-admin");
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');



//Cloud Functions
// credenciales para uso de FIREBASE
admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://henrybankfire.firebaseio.com",
});

//llamado a cors y use
const cors = require('cors');
ex.use( cors ( { origin: true}));
ex.use(express.urlencoded({ extended: true })); 
ex.use(express.json());

//var port = process.env.PORT || 8080;

// const jwtCheck = jwt({
//       secret: jwks.expressJwtSecret({
//           cache: true,
//           rateLimit: true,
//           jwksRequestsPerMinute: 5,
//           jwksUri: 'https://dev-i-yg-fcf.us.auth0.com/.well-known/jwks.json'
//     }),
//     audience: 'https://moonbank/api',
//     issuer: 'https://dev-i-yg-fcf.us.auth0.com/',
//     algorithms: ['RS256']
// });

// ex.use(jwtCheck);

// ex.get('/authorized',  (req, res) {
//     res.send('Secured Resource');
// });


const DBS = admin.firestore();
const auth = admin.auth();
// auth para tokens
//const authMiddleware = require('./authMiddle');


//toda las rutas necesitan auth
//ex.use(authMiddleware);

//HELLO
ex.get('/api', async (req, res) => {
  await res.status(200).send('Bienvenido a Moon Bank');

});





// RETURN todos los usuarios
ex.get('/api/users', async (req, res) => {

  try {
  const snapshot = await DBS.collection('Users').get();

  let users = [];
  snapshot.forEach(doc => {
    let id = doc.id;
    let data = doc.data();
    users.push({id, ...data});

  });
    return res.status(200).send(JSON.stringify(users));
      }catch(error){
        
        console.log(error);
        return res.status(500).send(error);
          }

  });


//traer datos de un usuario especifico via CVU


ex.get('/api/users/cvu/:cvu', async (req, res) =>{

          const cvu = req.params.cvu;
         
          const query =  DBS.collection('Users').where('cvu', '==', cvu);
                      console.log(query)
          
          const  querySnapshot = await query.get();
          console.log(querySnapshot)
          if(querySnapshot.size > 0 ){
            return res.status(200).json(querySnapshot.docs[0].data());
            
          }
          else {
            return res.status(400).json({status: 'not found'});
          }

    });

  // traer usuario por id

  ex.get('/api/users/:id', async (req, res) =>{
    
      try {
        const Id = request.params.id;
    
        if (!Id) throw new Error('ID is required');
    
        const query = await DBS.collection('Users').doc(Id).get();
    
        if (!query.exists){
            throw new Error('Fight doesnt exist.')
        }
    
        res.status(200).json({
          id: query.id,
          data: query.data()
        });
    
      } catch(error){
    
        res.status(500).send(error);
    
      }
    
  });









  
// post para traferencias desde otra app

  ex.post('/api/users', async (req, res) =>  {
   
  const {amount, senderCVU, senderName, receiverCVU, reason} = req.body
 
  
 if(amount && senderCVU && receiverCVU && senderCVU && senderName){

  //Postman manda los numeros como string idk
  const parsed = parseFloat(amount)
  const searchReceiverId = await DBS.collection('Directions').doc('Cvu').collection('listaDeCvu').doc(receiverCVU).get();

  
  if(!searchReceiverId.data()) return res.json({cvu: "No encontre el cvu de destino"}).status(400)
  let receiverId = await searchReceiverId.data().userId


  //Wallet del usuario que recibe

  const receiverWallet = await DBS.collection('Users').doc(receiverCVU).collection("Wallet")
                                .doc(receiverCVU).get();

  
  //Saldo del usuario que recibe
  const  receiverCurrentMoney = await receiverWallet.data().saldo
  
  //Nombre del usuario que recibe

  const rName = await DBS.collection('Users').doc(receiverId).get()

 
  const receiverName = await rName.data().name
  
        //Se la damos al que recibe
        const addToReceiverWallet = await DBS.collection('Users').doc(receiverId).collection("Wallet")
                              .doc(receiverCVU).set({saldo:receiverCurrentMoney + parsed})
          
        //Definimos una fecha para que sea exactamente la misma en las dos
        //Despues hay que pasar de unix a algo normal de alguna forma
          let fecha = Date.now()
      
      let transferenciaDesdeOtroUsuario = {
        desde: senderCVU,
        sender: senderName,
        fecha,
        operacion: "transferencia",
        categoria: "Tentrante",
        motivo: reason || "Sin especificar",
        monto: parsed,
        estado: "Completada"
        
      }

      res.json({transferencia: transferenciaDesdeOtroUsuario}).status(200)
      
}else{
  res.json({Error: "enviame todo o te volves jugador de lol", Datos:["amount", "senderId", "receivercvu", "motivo"]}).status(400)
}
})


//----------------------------**------------------------ 

exports.ex = functions.https.onRequest(ex);
