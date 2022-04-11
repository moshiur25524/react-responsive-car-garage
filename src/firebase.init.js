// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGpgExy730vWHmrnfULXYgmRsMPhtblKI",
  authDomain: "genius-car-services-b36bd.firebaseapp.com",
  projectId: "genius-car-services-b36bd",
  storageBucket: "genius-car-services-b36bd.appspot.com",
  messagingSenderId: "839982537624",
  appId: "1:839982537624:web:a18d577ab6117334c129ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;