import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCzggcE4mao6xrXWir1fGaualnG4AOs5EE",
    authDomain: "teachmate-196d7.firebaseapp.com",
    projectId: "teachmate-196d7",
    storageBucket: "teachmate-196d7.firebasestorage.app",
    messagingSenderId: "775235811730",
    appId: "1:775235811730:web:d9a035d13f2cf3cd5a294b",
    measurementId: "G-WH5BYLWRZ5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
