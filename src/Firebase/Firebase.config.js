// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGt-Ee-NpM-U9SECX99Y8JBYrayE8_w88",
  authDomain: "commertial-project-auth.firebaseapp.com",
  projectId: "commertial-project-auth",
  storageBucket: "commertial-project-auth.appspot.com",
  messagingSenderId: "614002876874",
  appId: "1:614002876874:web:ade4e8d510a7be0c746f33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;