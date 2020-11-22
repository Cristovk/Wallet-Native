
//inicializacion FIREBASE functions
//llamado a EXPRESS
const functions = require("firebase-functions");
const express = require("express");
const ex = express();
const admin = require("firebase-admin");



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

const DBS = admin.firestore();
const auth = admin.auth();
// auth para tokens
const authMiddleware = require('./authMiddle');


//toda las rutas necesitan auth
ex.use(authMiddleware);

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
    res.status(200).send(JSON.stringify(users));


      }catch(error){
        
        console.log(error);
        return res.status(500).send(error);
          }

  });


//traer datos de un usuario especifico

ex.get('/api/users/cv/:cvu', async (req, res) =>{
  
  
    //const wh = DBS.collection('Users').doc(req.params.id);
     //const wh = DBS.collection('Users').where('cvu', '==', `${req.params.cvu}`);

  await DBS.collection('Users').where('cvu', '==', `${req.params.cvu}`).onSnapshot(docu => {
  //console.log(docu);
  return res.status(200).send(JSON.stringify(docu));
          })
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
