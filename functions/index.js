
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

//llamado a cors
const cors = require('cors');
ex.use( cors ( { origin: true}));
ex.use(express.urlencoded({ extended: true })); 


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


//traer datos de un usuario especifico

ex.get('/api/users/cvu/:cvu', async (req, res) =>{
  
      try{
        let {cvu} = req.params;
        const collect = DBS.collection('Users').where('cvu', '==', `${cvu}`);

        let querySnapshot = await  collect.get();

              console.log(querySnapshot);
              querySnapshot.forEach(documentSnapshot =>{
                let data = documentSnapshot.data();
                res.sendStatus(403);
          
              return res.status(200).send(JSON.stringify({...data}));
          

        })
      }catch(error){ 
          console.log(error)
         return res.status(500).send(error, 'El Cvu no se encontro');  
        }

    });


  



  // traer usuario por id

  ex.get('/api/users/:id', async (req, res) =>{
    try{
    const snapshot = await DBS.collection('Users').doc(req.params.id).get();
  
    const userID = snapshot.id;
    const userData = snapshot.data();
    
    res.status(200).send(JSON.stringify({id: userID, ...userData}));
    
    }catch(error){
      res.status(500).send(error, 'Usuario no encontrado');
    }
  });



//----------------------------**------------------------ 

exports.ex = functions.https.onRequest(ex);
