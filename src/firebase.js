import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6wwytRCJ8LlHLNgIMWo4arypSvZu8QWM",
    authDomain: "clone-b8391.firebaseapp.com",
    projectId: "clone-b8391",
    storageBucket: "clone-b8391.appspot.com",
    messagingSenderId: "312462406392",
    appId: "1:312462406392:web:028b20b71a04b45cf3c10d",
    measurementId: "G-XX1CJJSQ16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };