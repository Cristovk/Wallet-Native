import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
//import from './js'
// import {
//   REACT_API_KEY, REACT_AUTH_DOMANAIN, REACT_DATABASE_URL,
//   REACT_PROJECT_ID, REACT_STOREAGE_BUCKET, REACT_MESSAGING_SENDER_ID,
//   REACT_APP_ID, REACT_MEASUREMENT_ID
// } from 'react-native-dotenv';




// var env = require('node-env-file');
// env(__dirname + '/.env')

// console.log(process.env);


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


export const firebases = firebase.firestore()
export const auth = db.auth()
export const storage = db.storage()
export default db
