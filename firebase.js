import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'



const app = firebase.initializeApp({
    apiKey: process.env.REACT_API_KEY,
    authDomain: process.env.REACT_AUTH_DOMANAIN,
    databaseURL: process.env.REACT_DATABASE_URL,
    projectId: process.env.REACT_PROJECT_ID,
    storageBucket: process.env.REACT_STOREAGE_BUCKET,
    messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_MEASUREMENT_ID
  });

export const auth = app.auth()
export const storage = app.storage()
export default app
