// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Irw5cN7SxDrgYBv9Xg2qqpsqcJ-M6KY",
  authDomain: "garments-production.firebaseapp.com",
  projectId: "garments-production",
  storageBucket: "garments-production.firebasestorage.app",
  messagingSenderId: "772235359740",
  appId: "1:772235359740:web:624ade594d2d59d5a72e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth