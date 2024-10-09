import React from 'react';
import HandleGoogleLogin from '../components/HandleGoogleLogin';

const About: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
    <h1 className="text-3xl mb-4">Home page!</h1>
    <button 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      onClick={HandleGoogleLogin}
    >
      Login with Google
    </button>
  </div>
  );
};

export default About;
