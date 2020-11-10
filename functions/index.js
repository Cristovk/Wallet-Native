const functions = require('firebase-functions');
const express = require('express');
const ex = express();
const admin = require('firebase-admin');



admin.initializeApp({
    credential: admin.credential.cert('./permissions.json'),
    databaseURL: "https://henrybankfire.firebaseio.com"
  });

  const  DBS  = admin.firestore()




ex.get('/hello-world', (req, res) => {
    return res.status(200).json({message: 'Hola caracola'})
});

ex.post('/api/user-data', async (req, res) =>{
  try{
    await  DBS.collection('user_data').doc('/' + req.body.id + '/')
    .create({name: req.body.name});
    return res.status(204).json();

    }catch(error) {
        console.log(error)
        return res.status(500).send(error);
    }
});

ex.post('/api/user-try', async (req, res) =>{
    try{
      await  DBS.doc('user-try/' + req.body.id + '/')
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