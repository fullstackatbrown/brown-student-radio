// src/firebaseui.js
import firebase from './firebase';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'; // Import FirebaseUI styles

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
    // Add other providers if needed, e.g., Google, Facebook
  ],
  // Callbacks
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

export { ui, uiConfig };
