// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzggcE4mao6xrXWir1fGaualnG4AOs5EE",
  authDomain: "teachmate-196d7.firebaseapp.com",
  projectId: "teachmate-196d7",
  storageBucket: "teachmate-196d7.firebasestorage.app",
  messagingSenderId: "775235811730",
  appId: "1:775235811730:web:d9a035d13f2cf3cd5a294b",
  measurementId: "G-WH5BYLWRZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth}