import React, { useState, useCallback } from 'react';
import { useThreats } from '../../../contexts';
import {
  THREAT_DISTANCE_MIN,
  THREAT_DISTANCE_MAX,
  INPUT_LABELS,
  INPUT_PLACEHOLDERS,
  BUTTON_TEXT,
  UI_TEXT,
  validateThreatInput
} from './const';
import './ThreatInput.css';

const ThreatInput = () => {
  const [degrees, setDegrees] = useState('');
  const [distance, setDistance] = useState('');
  const [error, setError] = useState('');
  const { threats, addThreat, removeThreat, clearThreats } = useThreats();

  const handleAddThreat = useCallback(() => {
    setError('');

    const validation = validateThreatInput(degrees, distance);
    
    if (!validation.valid) {
      setError(validation.error);
      return;
    }

    const success = addThreat(validation.degreesNum, validation.distanceNum);
    
    if (success) {
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
      <h3 className="threat-input-title">{UI_TEXT.TITLE}</h3>
      
      <div className="threat-input-fields">
        <div className="threat-field">
          <label htmlFor="threat-degrees">{INPUT_LABELS.DEGREES}</label>
          <input
            id="threat-degrees"
            type="number"
            value={degrees}
            onChange={(e) => setDegrees(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={INPUT_PLACEHOLDERS.DEGREES}
            className="threat-input"
          />
        </div>

        <div className="threat-field">
          <label htmlFor="threat-distance">{INPUT_LABELS.DISTANCE}</label>
          <input
            id="threat-distance"
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={INPUT_PLACEHOLDERS.DISTANCE}
            min={THREAT_DISTANCE_MIN}
            max={THREAT_DISTANCE_MAX}
            className="threat-input"
          />
        </div>

        {error && <div className="threat-error">{error}</div>}

        <button 
          onClick={handleAddThreat}
          className="threat-add-button"
        >
          {BUTTON_TEXT.ADD}
        </button>
      </div>

      <div className="threat-list-section">
        <div className="threat-list-header">
          <h4>{UI_TEXT.ACTIVE_THREATS}</h4>
          {threats.length > 0 && (
            <button 
              onClick={clearThreats}
              className="threat-clear-button"
            >
              {BUTTON_TEXT.CLEAR_ALL}
            </button>
          )}
        </div>

        {threats.length === 0 ? (
          <div className="threat-list-empty">{UI_TEXT.NO_THREATS}</div>
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
