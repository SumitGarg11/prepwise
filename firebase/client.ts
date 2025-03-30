// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU_IHC1TkRoVrhuaj1ha3du4iuEPJhLGA",
  authDomain: "prepwise-d0ec2.firebaseapp.com",
  projectId: "prepwise-d0ec2",
  storageBucket: "prepwise-d0ec2.firebasestorage.app",
  messagingSenderId: "657866448196",
  appId: "1:657866448196:web:af5e16146ba215119b8b11",
  measurementId: "G-3HRWKBTTXV"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);