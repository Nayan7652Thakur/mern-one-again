// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-again-9e6e3.firebaseapp.com",
  projectId: "mern-again-9e6e3",
  storageBucket: "mern-again-9e6e3.appspot.com",
  messagingSenderId: "144535160915",
  appId: "1:144535160915:web:9d7fc36d4940d7d000dea6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

