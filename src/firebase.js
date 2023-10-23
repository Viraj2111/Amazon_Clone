import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX1bRtgrE9YBPPkZ0QzFbfyA8Q05zQlG4",
  authDomain: "challenge-28f8b.firebaseapp.com",
  projectId: "challenge-28f8b",
  storageBucket: "challenge-28f8b.appspot.com",
  messagingSenderId: "801174686524",
  appId: "1:801174686524:web:488a6087a6e1aadf4f2c39",
  measurementId: "G-WTMPNLJQRC"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth };