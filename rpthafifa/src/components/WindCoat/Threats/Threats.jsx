import React from 'react';
import './Threats.css';

const Threats = ({ threats, degree, setDegree, distance, setDistance, handleSubmit }) => {
  return (
    <div className="threats-component">
      <h2>Threats</h2>
      <form onSubmit={handleSubmit} className="threats-form">
        <input
          type="number"
          placeholder="Degree"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          required
          className="threat-input"
        />
        <input
          type="number"
          placeholder="Distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
          className="threat-input"
        />
        <button type="submit" className="add-threat-button">Add Threat</button>
      </form>
      <div className="threat-list">
        <div className="threat-list-header">
          <span>Degree</span>
          <span>Distance</span>
          <span>Priority</span>
        </div>
        {threats.map((threat, index) => (
          <div key={index} className="threat-item">
            <span>{threat.degree}</span>
            <span>{threat.distance}</span>
            <span>{threat.priority}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Threats;
