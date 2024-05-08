import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDppbHq8tmH5VBqy2PhevQLlKP9vrm18ow",
  authDomain: "aprendendo-firebase-fc22e.firebaseapp.com",
  databaseURL: "https://aprendendo-firebase-fc22e-default-rtdb.firebaseio.com",
  projectId: "aprendendo-firebase-fc22e",
  storageBucket: "aprendendo-firebase-fc22e.appspot.com",
  messagingSenderId: "650046833125",
  appId: "1:650046833125:web:79daa051cc2ac3910e6f0c",
  measurementId: "G-LXEGKKZZB9"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }
  export default firebase
  