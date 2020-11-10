import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'
//Puse mi db si se me pasa eliminarla descomenten la original
const config = {
  apiKey: "AIzaSyAjV9grThLriuR9J9tBsxtNbxbuiSZP-nw",
  authDomain: "bestwallet-b5d9a.firebaseapp.com",
  databaseURL: "https://bestwallet-b5d9a.firebaseio.com",
  projectId: "bestwallet-b5d9a",
  storageBucket: "bestwallet-b5d9a.appspot.com",
  messagingSenderId: "1050513501403",
  appId: "1:1050513501403:web:7b021df4d59baca7ec30fe"
};
/*const db = firebase.initializeApp({
  apiKey: "AIzaSyBb1jsHd9pMGasi6PWTIPLPLKr0Sgat-QU",
  authDomain: "henrybankfire.firebaseapp.com",
  databaseURL: "https://henrybankfire.firebaseio.com",
  projectId: "henrybankfire",
  storageBucket: "henrybankfire.appspot.com",
  messagingSenderId: "414362968909",
  appId: "1:414362968909:web:ab8f525b2a252c2ab14d04",
  measurementId: "G-82YMTQ231G"
});*/

firebase.initializeApp(config)
export const firebases = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export default firebase
