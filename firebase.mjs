// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHHEFNaoRwf4u7I_OhoCdFCU6u7eA3Nd8",
  authDomain: "testing-e3566.firebaseapp.com",
  projectId: "testing-e3566",
  storageBucket: "testing-e3566.appspot.com",
  messagingSenderId: "1016536821653",
  appId: "1:1016536821653:web:a6e20b4b990ff35302d09c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);