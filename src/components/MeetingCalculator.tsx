import React, { useState } from 'react';
import './MeetingCalculator.css';

const MeetingCalculator: React.FC = () => {
  const [numAttendees, setNumAttendees] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [durationMinutes, setDurationMinutes] = useState<number>(60);

  const calculateCost = (): number => {
    const hours = durationMinutes / 60;
    return numAttendees * hourlyRate * hours;
  };

  const totalCost = calculateCost();

  return (
    <div className="feature-container">
      <h1>Meeting Cost Calculator</h1>
      <p className="feature-description">
        Calculate how much a meeting costs your organization based on the number of 
        attendees, their average hourly rate, and meeting duration.
      </p>

      <div className="calculator-card">
        <div className="input-group">
          <label htmlFor="attendees">
            Number of Attendees
            <span className="input-value">{numAttendees}</span>
          </label>
          <input
            type="range"
            id="attendees"
            min="1"
            max="50"
            value={numAttendees}
            onChange={(e) => setNumAttendees(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label htmlFor="rate">
            Average Hourly Rate ($)
            <span className="input-value">${hourlyRate}</span>
          </label>
          <input
            type="range"
            id="rate"
            min="10"
            max="200"
            step="5"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
          />
        </div>

        <div className="input-group">
          <label htmlFor="duration">
            Meeting Duration (minutes)
            <span className="input-value">{durationMinutes} min</span>
          </label>
          <input
            type="range"
            id="duration"
            min="15"
            max="240"
            step="15"
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(Number(e.target.value))}
          />
        </div>

        <div className="result-section">
          <h2>Total Meeting Cost</h2>
          <div className="cost-display">${totalCost.toFixed(2)}</div>
          <div className="cost-breakdown">
            <p>{numAttendees} attendees × ${hourlyRate}/hour × {(durationMinutes / 60).toFixed(2)} hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCalculator;
