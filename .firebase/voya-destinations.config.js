// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCASZ5bn-10_A3m22lX6hhrCPGwnk2iVCQ",
  authDomain: "voya-destinations.firebaseapp.com",
  projectId: "voya-destinations",
  storageBucket: "voya-destinations.appspot.com",
  messagingSenderId: "490426462427",
  appId: "1:490426462427:web:cdd3a854cb41efc3ba9cfe",
  measurementId: "G-75WQ183X5W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
