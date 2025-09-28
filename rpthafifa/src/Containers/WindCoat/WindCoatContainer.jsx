import React, { useContext } from 'react';
import { WindCoatContext } from '../../context/WindCoatContext';
import WindCoatLever from '../../components/WindCoat/WindCoatLever';
import { useLocation, useNavigate } from 'react-router-dom';
import './WindCoatContainer.css';

const WindCoatContainer = () => {
  const { leverPosition, setLeverPosition } = useContext(WindCoatContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDefenseSectorClick = () => {
    navigate('/defense-sector');
  };

  const handleBackToMainClick = () => {
    navigate('/');
  };

  return (
    <div className="wind-coat-controls">
      <WindCoatLever position={leverPosition} setPosition={setLeverPosition} />
      {location.pathname === '/' && leverPosition === 'scan' && (
        <button className="defense-sector-button" onClick={handleDefenseSectorClick}>Defense Sector</button>
      )}
      {location.pathname === '/defense-sector' && (
        <button className="defense-sector-button" onClick={handleBackToMainClick}>Back to Main</button>
      )}
    </div>
  );
};

export default WindCoatContainer;
