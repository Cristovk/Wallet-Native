import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'



const db = firebase.initializeApp({
  apiKey: "AIzaSyBb1jsHd9pMGasi6PWTIPLPLKr0Sgat-QU",
  authDomain: "henrybankfire.firebaseapp.com",
  databaseURL: "https://henrybankfire.firebaseio.com",
  projectId: "henrybankfire",
  storageBucket: "henrybankfire.appspot.com",
  messagingSenderId: "414362968909",
  appId: "1:414362968909:web:ab8f525b2a252c2ab14d04",
  measurementId: "G-82YMTQ231G"
});

export const auth = db.auth()
export const storage = db.storage()
export default db

