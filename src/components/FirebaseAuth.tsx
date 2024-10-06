// src/components/FirebaseAuth.js
import React, { useEffect, useRef } from 'react';
import { ui, uiConfig } from '../firebaseui';

const FirebaseAuth = () => {
  const authContainer = useRef(null);

  useEffect(() => {
    // Start the FirebaseUI authentication widget
    if (authContainer.current) {
      ui.start(authContainer.current, uiConfig);
    }

    // Cleanup on unmount
    return () => ui.reset();
  }, []);

  return <div ref={authContainer}></div>;
};

export default FirebaseAuth;
