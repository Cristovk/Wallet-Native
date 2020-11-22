
//inicializacion FIREBASE functions
//llamado a EXPRESS
const functions = require("firebase-functions");
const express = require("express");
const ex = express();
const admin = require("firebase-admin");

const { user } = require("firebase-functions/lib/providers/auth");
const { toUpper } = require("lodash");
//import {auth} from '../../firebase'

//Cloud Functions
// credenciales para uso de FIREBASE
admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://henrybankfire.firebaseio.com",
});

// llamado a cors
const cors = require('cors');
ex.use( cors ( { origin: true}));

const DBS = admin.firestore();
const auth = admin.auth();



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

ex.get('/users/:id', (req, res) =>{
   const snapshot = DBS.collection('Users').where('dni', '==', req.params.dni).get();

  const userID = snapshot.id;
  const userData = snapshot.data();
  
  res.status(200).send(JSON.stringify({id: userID, ...userData}));

})





//----------------------------**------------------------ 

exports.ex = functions.https.onRequest(ex);

// ex.post("/user", (req, res) => {
//   const {
//     email,
//     password,
//     name,
//     lastName,
//     birtday,
//     phone,
//     dni,
//     cuil,
//   } = req.body;

//   //crear usuario
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       //Si el usuario se crea,los datos del registro se agregan
//       DBS.collection("user")
//         .doc(auth.currentUser.uid)
//         .set({
//           name: name,
//           lastName: lastName,
//           birthay: birtday,
//           phone: phone,
//           dni: dni,
//           cuil: cuil,
//           created: Date.now(),
//         })
//         .catch((error) => {
//           console.log("Algo salio mal al agregar el user a firestore", error);
//         });

//       return res.status(200).json();
//     })
//     .catch((error) => {
//       console.log("Algo fallo en el Registro", error);
//       return res.status(500).send(error);
//     });
// });

