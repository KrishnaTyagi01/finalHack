import firebase from "firebase";
//import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyByMAiUDXbDxlKB23xqNb5D7-nBp3Nnwdg",
    authDomain: "student-mate-a036e.firebaseapp.com",
    projectId: "student-mate-a036e",
    storageBucket: "student-mate-a036e.appspot.com",
    messagingSenderId: "699126528144",
    appId: "1:699126528144:web:a5f14462301ee5185f4015",
    measurementId: "G-N5LR0T78HV"
  };

  
  var fireDb = firebase.initializeApp(firebaseConfig);
  
  const db = fireDb.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export {firebase};
  export default fireDb.database().ref();

 