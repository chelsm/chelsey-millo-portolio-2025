// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6vmFQGssFJwdLOEF_VihasKK5oNVzaTE",
  authDomain: "chelsey-millo-portolio-2025.firebaseapp.com",
  databaseURL: "https://chelsey-millo-portolio-2025-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chelsey-millo-portolio-2025",
  storageBucket: "chelsey-millo-portolio-2025.firebasestorage.app",
  messagingSenderId: "480532185965",
  appId: "1:480532185965:web:63262c4683ce8346f39064",
  measurementId: "G-JZ09X69TCG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app);