
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";             


  const firebaseConfig = {
    apiKey: "AIzaSyBTj6xwABfI8Yh8MqU5_pw12jRqIBXuM4U",
    authDomain: "maya-cosmetics-d0957.firebaseapp.com",
    projectId: "maya-cosmetics-d0957",
    storageBucket: "maya-cosmetics-d0957.appspot.com",
    messagingSenderId: "462359436600",
    appId: "1:462359436600:web:9cfb0ce3257460a71cf5cd",
    measurementId: "G-PKQZSX98WD"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export 
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 