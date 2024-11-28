import React from 'react';
import './Calendar.css';

type Show = {
  show: string;
  dj: string;
  start: number; // Time in 24-hour format (e.g., 14 for 2 PM)
  end: number; // Time in 24-hour format (e.g., 16 for 4 PM)
};

type Schedule = {
  [day: string]: Show[]; // Example: { Monday: [{ show: 'The Mix', dj: 'Matt', start: 8, end: 9 }] }
};

const Calendar: React.FC<{ schedule: Schedule }> = ({ schedule }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = Array.from({ length: 24 }, (_, i) => i); // Generate 24 hours (0-23)

  return (
    <div className="calendar">
      {/* Header Row */}
      <div className="calendar-header">
        <div className="time-column"></div> {/* Empty corner cell */}
        {days.map((day) => (
          <div key={day} className="day-header">
            {day}
          </div>
        ))}
      </div>

      {/* Time Rows */}
      <div className="calendar-body">
        {hours.map((hour) => (
          <div key={hour} className="hour-row">
            {/* Time Column */}
            <div className="time-column">{`${hour}:00`}</div>
            {/* Day Columns */}
            {days.map((day) => {
              const shows = schedule[day] || [];
              const show = shows.find((s) => s.start <= hour && s.end > hour);
              return (
                <div key={day + hour} className={`day-cell ${show ? 'show-cell' : ''}`}>
                  {show ? (
                    <div className="show-details">
                      <strong>{show.show}</strong>
                      <br />
                      {show.dj}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
