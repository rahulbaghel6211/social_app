// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAbtdLnuHm1629r8sayBeyktmvZPI_AlWM",
  authDomain: "myscoialmedia.firebaseapp.com",
  projectId: "myscoialmedia",
  storageBucket: "myscoialmedia.appspot.com",
  messagingSenderId: "910371241376",
  appId: "1:910371241376:web:a2c41ff0171366bc68b8c5",
  measurementId: "G-6JC97M0HR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export{app,auth}