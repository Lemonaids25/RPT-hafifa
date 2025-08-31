import React, { useState } from 'react';

export default function RotationBox({ 
  onSend, 
  onReset, 
  placeholder = 'Rotation', 
  style = {} 
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    const val = String(inputValue).replace(/[^0-9.-]/g, '');
    const increment = val === '' || val === '-' || val === '.' ? 0 : Number(val);
    onSend(increment);
    setInputValue('');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        ...style
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={{ width: 'auto', color: '#222' }}
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={placeholder}
      />
      <button
        style={{ marginLeft: 8, height: 28 }}
        onClick={handleSend}
      >
        Set
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