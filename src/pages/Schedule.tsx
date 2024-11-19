import React, { useEffect } from 'react';
import './Schedule.css'; // Import the CSS file for styling

const Home: React.FC = () => {
  useEffect(() => {
    // Dynamically load Spinitron widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.spinitron.com/static/js/widget.js'; // Spinitron widget URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup the script when the component unmounts
    };
  }, []); // Empty dependency means this effect runs only once after the component mounts

  return (
    <div className="schedule-page">
      {/* Spinitron Calendar */}
      <div className="spinitron-calendar">
        <iframe
          width="100%"
          height="600"
          src="https://programs.testradio.org/WBRU/calendar?layout=1"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
