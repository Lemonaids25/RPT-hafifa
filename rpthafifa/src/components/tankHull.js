import React, { useState } from 'react';
import tankHullPng from '../assets/tank-hull.png';

function TankHull() {
  const [degree, setDegree] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    const val = String(inputValue).replace(/[^0-9.-]/g, '');
    const increment = val === '' || val === '-' || val === '.' ? 0 : Number(val);
    setDegree(prev => prev + increment);
    setInputValue('');
  };

  const handleReset = () => {
    setDegree(0);
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 70,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            style={{ width: 125, color: '#222' }}
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder=' Hull Rotation'
          />
        </label>
        <button
          style={{ marginLeft: 8, height: 28 }}
          onClick={handleSend}
        >
          Send
        </button>
        <button
          style={{ marginLeft: 8, height: 28 }}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <img
        src={tankHullPng}
        alt="Tank Hull"
        style={{
          position: 'absolute',
          left: '50%',
          top: '180px',
          transform: `translateX(-50%) rotate(${degree}deg)`,
          transition: 'transform 0.3s',
          width: '80px',
          height: 'auto',
          zIndex: 3,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
    </>
  );
}

export default TankHull;