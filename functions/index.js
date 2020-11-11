const functions = require('firebase-functions');
const express = require('express');
const ex = express();
const admin = require('firebase-admin');
//import {auth} from '../../firebase'


admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: "https://henrybankfire.firebaseio.com"
  });

  const  DBS  = admin.firestore()
  const auth = admin.auth()


ex.post('/user'), (req, res)  => {

  const { email , password,  name , lastName, birtday, phone, dni, cuil} = req.body;
  console.log(req.body);

  //crear usuario
  auth.createUserWithEmailAndPassword(email, password)
  .then(() => {
    //Si el usuario se crea,los datos del registro se agregan
    DBS.collection('user').doc(auth.currentUser.uid)
    .set({
      name: name,
      lastName: lastName,
      birthay: birtday,
      phone: phone,
      dni: dni,
      cuil: cuil,
      created: Date.now()

    })
        .catch(error => {
          console.log('Algo salio mal al agregar el user a firestore', error)
          })

    return res.status(200).json();
    

  })
  .catch(error => {
    console.log('Algo fallo en el Registro', error)
    return res.status(500).send(error);
  })



}












ex.get('/hello-world', (req, res) => {
    return res.status(200).json({message: 'Hola caracola'})
});

ex.post('/api/user-data', async (req, res) =>{
  try{
    await  DBS.collection('user_data').doc('/' + req.body.id + '/').collection(asdas).doc(adsjjsaa)
    .create({name: req.body.name});
    return res.status(204).json();

    }catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
});

ex.post('/api/user-try', async (req, res) =>{
    try{
      await  DBS.doc('user-try/' + req.body.id + '/'+ 'historico/fecha/')
      .create({
          name: req.body.name,
          age: req.body.age  
        });
      return res.status(204).json();
   
      }catch(error) {
          console.log(error)
          return res.status(500).send(error);
      }
  });

  //traer un user

  ex.get('/api/user-try/:user_id', async (req, res) => {
      try{

        const doc = DBS.doc('user-try/'+req.params.id);
        const name = await doc.get()
            const response = name.data()
            return res.status(200).json(response)


      }catch{
        console.log(error)
        return res.status(500).send(error);

      }


      
  })

  //traer todo los usuarios
  ex.get('/api/user-try', async (req, res) => {
    try{

      const query = DBS.collection('user-try');
      const querySnapshot = await query.get();
      const docs = querySnapshot.docs; 
      
      
      const response = docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
      }));

      return res.status(200).json(response)

    }catch{
      console.log(error)
      return res.status(500).send(error);

    }
});




exports.ex = functions.https.onRequest(ex);


