// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  apiKey: "AIzaSyDAGpQlzrk0Q-FPK1tWVgL-4wwijHf7SfA",
  authDomain: "job-portal1-9b19f.firebaseapp.com",
  projectId: "job-portal1-9b19f",
  storageBucket: "job-portal1-9b19f.appspot.com",
  messagingSenderId: "522601886321",
  appId: "1:522601886321:web:d5e18c0db22e329ee5a1d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);