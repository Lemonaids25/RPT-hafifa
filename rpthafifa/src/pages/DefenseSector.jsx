import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WindCoatContext } from '../context/WindCoatContext';
import WindCoatContainer from '../Containers/WindCoat/WindCoatContainer';
import ThreatsContainer from '../Containers/WindCoat/Threats/ThreatsContainer';
import './DefenseSector.css';

const DefenseSector = () => {
  const navigate = useNavigate();
  const { leverPosition } = useContext(WindCoatContext);

  useEffect(() => {
    if (leverPosition !== 'scan') {
      navigate('/');
    }
  }, [leverPosition, navigate]);

  return (
    <div className="defense-sector-page">
      <div className="defense-sector-layout">
        <div className="left-panel">
          <ThreatsContainer />
        </div>
        <div className="right-panel">
          {/* This will be populated later */}
          <WindCoatContainer />
        </div>
      </div>
    </div>
  );
};

export default DefenseSector;
