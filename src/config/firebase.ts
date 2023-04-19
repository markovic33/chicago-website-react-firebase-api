
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASqinuoHmcF3nKzDEem-HwfV5JaJ0TgYk",
  authDomain: "react-web-site-c4609.firebaseapp.com",
  projectId: "react-web-site-c4609",
  storageBucket: "react-web-site-c4609.appspot.com",
  messagingSenderId: "243970438976",
  appId: "1:243970438976:web:3e3a1d6e56d174dec1aca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);