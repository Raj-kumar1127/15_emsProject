// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjvGqnD54M4BAzcVqQ52xTD7n76WnBE1Y",
  authDomain: "esmp-21c4c.firebaseapp.com",
  projectId: "esmp-21c4c",
  storageBucket: "esmp-21c4c.firebasestorage.app",
  messagingSenderId: "298679015865",
  appId: "1:298679015865:web:3abff0a3a7ac735e21be68"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);