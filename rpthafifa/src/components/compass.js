import React, { useState } from 'react';
import degreePng from '../assets/360-degrees.png';
import NorthArrowPng from '../assets/north-arrow.png';

export function ProtractorImage({ rotation }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}>
      <img
        src={degreePng}
        alt="360 degree markings"
        style={{
          width: '300px',
          height: 'auto',
          marginTop: '100px',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.3s'
        }}
      />
    </div>
  );
}

export function NorthArrow() {
  return (
    <img
      src={NorthArrowPng}
      alt="North Arrow"
      style={{
        position: 'absolute',
        left: '50%',
        top: '125px',
        transform: 'translateX(-50%)',
        zIndex: 2,
        pointerEvents: 'none',
        width: '30px',
        height: '35px',
        userSelect: 'none'
      }}
    />
  );
}

function DegreeInput({ onSend, onReset }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    // Allow negative and decimal increments
    const val = String(inputValue).replace(/[^0-9.-]/g, '');
    const increment  = val === '' || val === '-' || val === '.' ? 0 : Number(val);
    onSend(increment);
    setInputValue('');
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: 40,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        pointerEvents: 'auto',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <label>
        Incremental Rotation (degrees):&nbsp;
        <input
          type="text"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          style={{ width: 60 }}
          inputMode="numeric"
          pattern="[0-9]*"
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
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
}
export default function Compass() {
  const [degree, setDegree] = useState(0);

  const handleIncrement = (increment) => {
    setDegree(prev => prev + increment);
  };
  
   const handleReset = () => {
    setDegree(0);
  };


  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#fff' }}>
      <DegreeInput onSend={handleIncrement} onReset={handleReset} />
      <div style={{ position: 'relative' }}>
        <NorthArrow />
        <ProtractorImage rotation={-degree + 90} />
      </div>
    </div>
  );
}