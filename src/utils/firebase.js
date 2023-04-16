// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBfYkjnR9ILg0IdoDRdLJayi3_Co3lfkOk",
  authDomain: "portfolio-website-3f5af.firebaseapp.com",
  databaseURL: "https://portfolio-website-3f5af-default-rtdb.firebaseio.com",
  projectId: "portfolio-website-3f5af",
  storageBucket: "portfolio-website-3f5af.appspot.com",
  messagingSenderId: "92202213602",
  appId: "1:92202213602:web:a55f31c24374abc42c3ebb",
  measurementId: "G-229FVWGGP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
