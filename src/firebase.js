import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAEr1CxNV20JFysLdm5k_KdwGOubQ_uEcA",
    authDomain: "facebook---by-me.firebaseapp.com",
    projectId: "facebook---by-me",
    storageBucket: "facebook---by-me.appspot.com",
    messagingSenderId: "250834095253",
    appId: "1:250834095253:web:156cfe5ef4e47624135f9c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =  firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider,firebase };
  export default db;