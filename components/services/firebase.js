// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "blog-88191.firebaseapp.com",
  databaseURL: "https://blog-88191-default-rtdb.firebaseio.com",
  projectId: "blog-88191",
  storageBucket: "blog-88191.appspot.com",
  messagingSenderId: "785709095099",
  appId: "1:785709095099:web:27f5c05bcfe07474d5b19e",
  measurementId: "G-N9SD3WCD4X"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();


const db = getFirestore();

const storage = getStorage();


export { app, db, storage };