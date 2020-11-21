const functions = require("firebase-functions");
const express = require("express");
const ex = express();
const admin = require("firebase-admin");
//import {auth} from '../../firebase'

//Cloud Functions

admin.initializeApp({
  credential: admin.credential.cert("./permissions.json"),
  databaseURL: "https://henrybankfire.firebaseio.com",
});

const DBS = admin.firestore();
const auth = admin.auth();

ex.get('/', async (req, res) => {

  const snapshot = await DBS.collection('Users').get();

  let users = [];
  snapshot.forEach(doc => {
    let id = doc.id;
    let data = doc.data();

    users.push({id, ...data});

  });
    res.status(200).send(JSON.stringify(users));
});







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

