import React from 'react';
import FirebaseAuth from './components/FirebaseAuth.tsx';

const About: React.FC = () => {
  var firebase = require('firebase');
  var firebaseui = require('firebaseui');
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });
  return (
    <><h1>Home page!</h1><div id="firebaseui-auth-container"></div><div id="loader">Loading...</div></>
  );
};

export default About;
