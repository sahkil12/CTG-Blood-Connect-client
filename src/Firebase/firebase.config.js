// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLfNeKGSr_6Ooosrd8XFpK1oRqaxQxS6Q",
  authDomain: "ctg-blood-connect.firebaseapp.com",
  projectId: "ctg-blood-connect",
  storageBucket: "ctg-blood-connect.firebasestorage.app",
  messagingSenderId: "319633771072",
  appId: "1:319633771072:web:d9bca6a80d3e110152eda5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);