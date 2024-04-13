import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiSyXAR8r0VWnmcLS9L7a_vvEO275zIsM",
  authDomain: "real-estate-hospitality-haven.firebaseapp.com",
  projectId: "real-estate-hospitality-haven",
  storageBucket: "real-estate-hospitality-haven.appspot.com",
  messagingSenderId: "1059627837162",
  appId: "1:1059627837162:web:32cff72f3c1206611e9993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;