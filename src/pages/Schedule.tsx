import React, { useState } from 'react';
import './Schedule.css';
import Calendar from '../components/Calendar'; // Adjust path as needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const SchedulePage: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const schedule = {
    Monday: [
      { show: 'Morning Jazz', dj: 'DJ Smooth', start: 8, end: 10 },
      { show: 'Rock Hour', dj: 'DJ Thunder', start: 15, end: 17 },
    ],
    Tuesday: [
      { show: 'Pop Hits', dj: 'DJ Spark', start: 10, end: 12 },
      { show: 'Indie Vibes', dj: 'DJ Chill', start: 20, end: 22 },
    ],
    // Add more days/shows here as needed
  };

  const toggleView = () => {
    setShowCalendar(!showCalendar);
  };

  // Back button handler
  const goBack = () => {
    setShowCalendar(!showCalendar); // This will take the user to the previous page
  };

  return (
    <div className="schedule-container">
      {/* Main content that contains the now playing section and the schedule */}
      <div className="main-content">
        {/* Now Playing Section */}
        <div className="now-playing">
          <h2>Now Playing</h2>
          <p>Currently Playing: "Isn't She Lovely" by Stevie Wonder</p>
          <p>Up Next: "The Mix" by Matt DaSilva (8-9 PM)</p>
          {/* Button that triggers the slide */}
          <button className="toggle-button" onClick={toggleView}>
            View Full Schedule
          </button>
        </div>
      </div>

      {/* Sliding Content */}
      <div
        className={`sliding-content ${showCalendar ? 'show' : ''}`}
      >
        <div className="schedule">
          {/* Back Button */}
          <button className="back-button" onClick={goBack}>
            &#8592; Back
          </button>
          <h2>Full Schedule</h2>
          <Calendar schedule={schedule} />
          <button className="toggle-button" onClick={toggleView}>
            Back to Now Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
