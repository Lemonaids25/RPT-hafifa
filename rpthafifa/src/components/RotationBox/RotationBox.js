import React, { useState, useCallback } from 'react';
import './RotationBox.css';

export default function RotationBox({ onSet, onReset, placeholder = 'Rotation', style = {} }) {
  const [inputValue, setInputValue] = useState('');

  const handleSet = useCallback(() => {
    const match = inputValue.match(/^-?[\d.]*$/);
    const val = match ? match[0] : '';
    const rotation = (val === '' || val === '-' || val === '.' ? 0 : Number(val));
    onSet(rotation);
    setInputValue('');
  }, [inputValue, onSet]);
  // Display Missing
  
  return (
    <div id="rotation-box-id" style={style}>
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
  ); //In general it doesnt really matter but for Toolbox - Dont ever write text that isnt in a const in dict
}