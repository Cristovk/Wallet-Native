//import functions from 'firebase/functions'
import admin from 'firebase-admin';
admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.pruebaUso = functions.https.onRequest((request, response) => {
    admin.firestore().doc('prueba-uso/primerIntento').get()
   const p2 = promise.then(snapshot => {
        const data = snapshot.data()
        response.send(data)
    })
    // // p2.catch(error => {
    // //     //handle error
    // //     console.log(error)
    // //     response.status(500).send(error)
    // })
});
