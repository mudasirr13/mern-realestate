// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4bf51.firebaseapp.com",
  projectId: "mern-estate-4bf51",
  storageBucket: "mern-estate-4bf51.appspot.com",
  messagingSenderId: "214593970813",
  appId: "1:214593970813:web:120b21d6528cc827168714"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);