// const express = require("express");
// const ex = express();
// const cors = require('cors');
//import {auth} from '../../firebase'
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { forIn } = require('lodash');
//import {auth} from '../../firebase'

//Cloud Functions






admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: "https://henrybankfire.firebaseio.com"
  });

  const  DBS  = admin.firestore()
  const auth = admin.auth()


// ex.post('/user', (req, res)  => {

//   const { email , password,  name , lastName, birtday, phone, dni, cuil} = req.body;
//   console.log(req.body);

//   //crear usuario
//   auth.createUserWithEmailAndPassword(email, password)
//   .then(() => {
//     //Si el usuario se crea,los datos del registro se agregan
//     DBS.collection('user').doc(auth.currentUser.uid)
//     .set({
//       name: name,
//       lastName: lastName,
//       birthay: birtday,
//       phone: phone,
//       dni: dni,
//       cuil: cuil,
//       created: Date.now()

//     })
//         .catch(error => {
//           console.log('Algo salio mal al agregar el user a firestore', error)
//           })

//     return res.status(200).json();
    

//        })
//   .catch(error => {
//     console.log('Algo fallo en el Registro', error)
//     return res.status(500).send(error);
//        })



// })

//put user
// ex.put('Users/:user_id', async( req, res) => {  

//   try {
//     const documents = DBS.collection('Users').doc(req.params.user_id)
//     await documents.
//   }

// })







/* exports.getAllTransactionsFromUser = functions.https.onRequest(async (req, res) => {
  
  DBS.collection('Users').doc("8gJg7bVscfga0M6DaxkzlPuop4z2").collection("Wallet").get()
  .then((snapshot) => {
    const lista = []
    const montos = []
    snapshot.forEach((doc) => {
      lista.push(doc.data())
    });
    snapshot.forEach((doc) => {
      montos.push(doc.data().monto)
    });
    res.status(200).json({lista:lista, montos:montos})
    
  })
  .catch((err) => {
    res.status(400).json({occurrio_un_error:err});
  });
  
}); */

exports.sendMoney = functions.https.onRequest(async (req, res) =>  {
  const {amount, senderId, receivercvu} = req.body
 
  
 if(amount && senderId && receivercvu){

  //Postman manda los numeros como string idk
  const parsed = parseFloat(amount)

 //Buscar cvu del usuario que envia 
 let sendercvu
 const searchSenderCvu = await DBS.collection('Users')
  .doc(senderId)
  .collection("Wallet")
  .get()
  searchSenderCvu.forEach(doc => {
    sendercvu = doc.id
  });

  if(!sendercvu) return res.status(400).json({Error: "No encontre tu cvu :c"})

  //Si el cvu del que envia y del que recibe son iguales
  if(sendercvu === receivercvu) return  res.status(400).json({Error:"No te podes mandar plata a vos mismo"});
  const senderWallet = await DBS.collection('Users')
  .doc(senderId)
  .collection("Wallet")
  .doc(sendercvu)
  .get()

  
  //Saldo del usuario que envia
   
  const senderCurrentMoney = await senderWallet.data().saldo
  
  //Id del usuario que recibe buscado por cvu

    const searchReceiverId = await 
    DBS.collection('Directions')
    .doc("Cvu")
    .collection("listaDeCvu")
    .doc(receivercvu)
    .get()

    if(!searchReceiverId.data()) return res.status(400).json({Error: "No encontre el cvu de destino"})
    let receiverId = await searchReceiverId.data().userId

  //Wallet del usuario que recibe

  const receiverWallet = await DBS.collection('Users')
  .doc(receiverId)
  .collection("Wallet")
  .doc(receivercvu)
  .get()

  
  //Saldo del usuario que recibe
  const  receiverCurrentMoney = await receiverWallet.data().saldo
  
console.log("Saldo del recipiente antes de la transferencia", receiverCurrentMoney)
  //Fijamos si le alcanza la plata al que envia
    if(amount >senderCurrentMoney){
      //lo descartamos por pobre
      res.status(400).json({cMamo:"No tenes plata pa"});
      }else{
        //Empieza la transferencia

        //le sacamos la plata al que envia
        const discountFromSenderWallet = await DBS.collection('Users')
        .doc(senderId)
        .collection("Wallet")
        .doc(sendercvu)
        .set({saldo: senderCurrentMoney - parsed})

        //Se la damos al que recibe
        const addToReceiverWallet = await DBS.collection('Users')
          .doc(receiverId)
          .collection("Wallet")
          .doc(receivercvu)
          .set({saldo:receiverCurrentMoney + parsed})
          
        //Definimos una fecha para que sea exactamente la misma en las dos
          let fecha = Date.now()
        //Definimos un documento de transferencia saliente

        let transferenciaOtroUsuario = {
          hacia: receivercvu,
          fecha,
          tipo: "Tsaliente",
          motivo: "Testeando",
          monto: parsed

        }

        //Agregamos una transferencia saliente al que envia 
        const senderWallet = await DBS.collection('Users')
        .doc(senderId)
        .collection("Wallet")
        .doc(sendercvu)
        .collection("Movimientos")
        .add(transferenciaOtroUsuario)
      
      
      //Definimos un documento de transferencia entrante

      let transferenciaDesdeOtroUsuario = {
        desde: sendercvu,
        fecha,
        tipo: "Tentrante",
        motivo: "Test",
        monto: parsed
        
      }

      //Agregamos una transferencia saliente al que envia 
      const receiverWallet = await DBS.collection('Users')
      .doc(senderId)
      .collection("Wallet")
      .doc(receivercvu)
      .collection("Movimientos")
      .add(transferenciaDesdeOtroUsuario)

    
      
      res.status(200).json({ok:"Todo bien todo correcto"})
      }
}else{
  res.status(400).json({Error: "enviame todo o kaboom"})
}})

/*const saldo = DBS.collection('Users')
.doc("WzMUsDHu6phbygYSLsjgkI9Mz4o2")
.collection("Wallet")
.doc("12345678")
.get()
.then((snapshot) => {
  currentMoney = snapshot.data().saldo
  enoughtMoney(currentMoney, amount)
})
.catch((err) => {
  res.status(400).json({cMamo:err});
});*/