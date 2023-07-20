// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC74oP8bcHDTGg3o1MxjKrJAuS5NnkCm3Q",
  authDomain: "allevamanufacturing.firebaseapp.com",
  projectId: "allevamanufacturing",
  storageBucket: "allevamanufacturing.appspot.com",
  messagingSenderId: "1076131867679",
  appId: "1:1076131867679:web:df911c9279463a6feb392a",
  measurementId: "G-1MZ6FP2XZD",
  databaseURL: "https://allevamanufacturing-default-rtdb.firebaseio.com"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth(); 
const database = getDatabase(app);


export { auth, database };



