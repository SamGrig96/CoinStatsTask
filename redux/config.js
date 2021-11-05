import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


const config ={
    apiKey: "AIzaSyDUR96t6gKQocWnmwg0FiP1to_NRpsL66g",
    authDomain: "to-do-list-363f0.firebaseapp.com",
    projectId: "to-do-list-363f0",
    storageBucket: "to-do-list-363f0.appspot.com",
    messagingSenderId: "875572237335",
    appId: "1:875572237335:web:6428e88e7e8a7e48a87852",
    measurementId: "G-62N9KYXP9Z"
}
// Initialize Firebase
firebase.initializeApp(config);
const auth = firebase.auth()
const firestore = firebase.firestore()


export  {firebase,firestore,auth};