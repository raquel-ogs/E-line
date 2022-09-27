import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBeZzNOoosYTDfEe_CbA9HI2S2Q2bW3GGM",
    authDomain: "aula01-be2ae.firebaseapp.com",
    databaseURL: "https://aula01-be2ae-default-rtdb.firebaseio.com",
    projectId: "aula01-be2ae",
    storageBucket: "aula01-be2ae.appspot.com",
    messagingSenderId: "52980918719",
    appId: "1:52980918719:web:ed5a92de51a9b1380cd90a",
    measurementId: "G-JLR4TC7CH9"
  };

    if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);   
    }
    export default firebase;