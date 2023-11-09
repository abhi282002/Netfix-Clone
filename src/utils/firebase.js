// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzSdY5aE83jFnFepcfsGLzv_9shHwzLe4",
  authDomain: "netflixgpt-684e4.firebaseapp.com",
  projectId: "netflixgpt-684e4",
  storageBucket: "netflixgpt-684e4.appspot.com",
  messagingSenderId: "76485910722",
  appId: "1:76485910722:web:193093366be8bde9b21b5b",
  measurementId: "G-H3L1NH2H69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
