import dayjs from 'dayjs';
import db from '../../../../firebase'
import 



export const signupUser = (userDetails) => {
    
    const {firstName, lastName, birthday, email, password} = userDetails
    return () => {
     
        db.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
           

            db.firestore().collection('users').doc(db.auth().currentUser.uid)
            .set({
                firstName: firstName,
                lastName: lastName,
                email: email,
                dat: day,
                month: month,
                year: year,
                birthday: birthday,
            })

            .catch(error => {
                console.log('Something went wrong with added user to firestore: ', error);
            })
        })
        
        .catch(error => {
            console.log('Something went wrong with sign up: ', error);
        }
    },
};














// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
//  exports.pruebaUso = functions.https.onRequest((request, response) => {
//     admin.firestore().doc('prueba-uso/primerIntento').get()
//    const p2 = promise.then(snapshot => {
//         const data = snapshot.data()
//         response.send(data)
    })
    // // p2.catch(error => {
    // //     //handle error
    // //     console.log(error)
    // //     response.status(500).send(error)
    // })
});
