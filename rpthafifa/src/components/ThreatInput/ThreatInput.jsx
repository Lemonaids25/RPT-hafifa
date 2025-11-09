import React, { useState, useCallback } from 'react';
import { useThreats } from '../../contexts';
import './ThreatInput.css';

const ThreatInput = () => {
  const [degrees, setDegrees] = useState('');
  const [distance, setDistance] = useState('');
  const [error, setError] = useState('');
  const { threats, addThreat, removeThreat, clearThreats } = useThreats();

  const handleAddThreat = useCallback(() => {
    setError('');

    // Validate inputs
    if (degrees === '' || distance === '') {
      setError('Please enter both degrees and distance');
      return;
    }

    const degreesNum = parseFloat(degrees);
    const distanceNum = parseFloat(distance);

    if (isNaN(degreesNum) || isNaN(distanceNum)) {
      setError('Please enter valid numbers');
      return;
    }

    if (distanceNum < 0 || distanceNum > 3000) {
      setError('Distance must be between 0 and 3000m');
      return;
    }

    const success = addThreat(degreesNum, distanceNum);
    
    if (success) {
      // Clear inputs on success
      setDegrees('');
      setDistance('');
    }
  }, [degrees, distance, addThreat]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter') {
      handleAddThreat();
    }
  }, [handleAddThreat]);

  return (
    <div className="threat-input-container">
      <h3 className="threat-input-title">Threat Inputs</h3>
      
      <div className="threat-input-fields">
        <div className="threat-field">
          <label htmlFor="threat-degrees">Degrees (relative to hull)</label>
          <input
            id="threat-degrees"
            type="number"
            value={degrees}
            onChange={(e) => setDegrees(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="0-360"
            className="threat-input"
          />
        </div>

        <div className="threat-field">
          <label htmlFor="threat-distance">Distance (meters)</label>
          <input
            id="threat-distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="0-3000"
            min="0"
            max="3000"
            className="threat-input"
          />
        </div>

        {error && <div className="threat-error">{error}</div>}

        <button 
          onClick={handleAddThreat}
          className="threat-add-button"
        >
          Add Threat
        </button>
      </div>

      <div className="threat-list-section">
        <div className="threat-list-header">
          <h4>Active Threats</h4>
          {threats.length > 0 && (
            <button 
              onClick={clearThreats}
              className="threat-clear-button"
            >
              Clear All
            </button>
          )}
        </div>

        {threats.length === 0 ? (
          <div className="threat-list-empty">No threats detected</div>
        ) : (
          <ul className="threat-list">
            {[...threats].reverse().map(threat => (
              <li key={threat.id} className="threat-item">
                <div className="threat-item-info">
                  <span className="threat-id">ID: {threat.id}</span>
                  <span className="threat-details">
                    {threat.degrees}° / {threat.distance}m
                  </span>
                </div>
                <button
                  onClick={() => removeThreat(threat.id)}
                  className="threat-remove-button"
                  aria-label={`Remove threat ${threat.id}`}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ThreatInput;
