import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAtH5nbUU312xJUabScBHDcFSfDy8GAXXc",
    authDomain: "project-12fde.firebaseapp.com",
    projectId: "project-12fde",
    storageBucket: "project-12fde.appspot.com",
    messagingSenderId: "834153050776",
    appId: "1:834153050776:web:51bf6ed9412f12e9b796ed"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
