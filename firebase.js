import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaouMpFg5efZxmEWb6kWO-h1vVL5Vh5wU",
    authDomain: "messenger-f6203.firebaseapp.com",
    databaseURL: "https://messenger-f6203.firebaseio.com",
    projectId: "messenger-f6203",
    storageBucket: "messenger-f6203.appspot.com",
    messagingSenderId: "883743807896",
    appId: "1:883743807896:web:ca886595f6c75cb712f3ed",
    measurementId: "G-BF5XY50LTE"
  });

  const db = firebaseApp.firestore();

  export default db;
