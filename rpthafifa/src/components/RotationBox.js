import React, { useState } from 'react';
import './componentsCss/RotationBox.css';

export default function RotationBox({ onSet, onReset, placeholder = 'Rotation', style = {} }) {
  const [inputValue, setInputValue] = useState('');

  const handleSet = () => {
    const val = String(inputValue).replace(/[^0-9.-]/g, '');
    const rotation = val === '' || val === '-' || val === '.' ? 0 : Number(val);
    onSet(rotation);
    setInputValue('');
  };

  return (
    <div className="rotation-box-container" style={style}>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className="rotation-box-input"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={placeholder}
      />
      <button className="rotation-box-button" onClick={handleSet}>
        Set
      </button>
      <button className="rotation-box-button" onClick={onReset}>
        Reset
      </button>
      </div>
  );
}