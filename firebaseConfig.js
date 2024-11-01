// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbfOHtuNJWNKRqAJ_Jq6tyqA1T2d6Ltag",
  authDomain: "portolio2-8ba94.firebaseapp.com",
  projectId: "portolio2-8ba94",
  storageBucket: "portolio2-8ba94.appspot.com",
  messagingSenderId: "686974884320",
  appId: "1:686974884320:web:c12eaf10b9692789e77385",
  measurementId: "G-VWLP1R4VWP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
