// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJJH22EgDEqyFWir6HXo0Fye_Wbm-f8uE",
  authDomain: "brown-student-radio.firebaseapp.com",
  projectId: "brown-student-radio",
  storageBucket: "brown-student-radio.appspot.com",
  messagingSenderId: "610172329896",
  appId: "1:610172329896:web:76e6765d86023645bf879d",
  measurementId: "G-5LF7D3FZPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authorizing

export const auth = firebase.auth();
export default firebase;
