import firebase from "firebase/app"
import 'firebase/database'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArLTrMf83A-x5N5uRKVbYOcI7bJqNBYIQ",
  authDomain: "pam-2-96035.firebaseapp.com",
  databaseURL: "https://pam-2-96035-default-rtdb.firebaseio.com",
  projectId: "pam-2-96035",
  storageBucket: "pam-2-96035.appspot.com",
  messagingSenderId: "957325553207",
  appId: "1:957325553207:web:019ec01b3d1e27256399b2",
  measurementId: "G-Q42MNZ8YZE"
};

    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);   
    }
    export default firebase;