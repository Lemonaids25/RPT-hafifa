import React, { useState } from 'react';

export default function RotatableComponent({
  image,
  inputTop = 50,
  imgTop = 200,
  placeholder = 'Rotation',
  zIndex = 3,
  width = '80px',
  alt = 'Tank Part'
}) {
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
          top: inputTop,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center'
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
        src={image}
        alt={alt}
        style={{
          position: 'absolute',
          left: '50%',
          top: imgTop,
          transform: `translateX(-50%) rotate(${degree}deg)`,
          transition: 'transform 0.3s',
          width,
          height: 'auto',
          zIndex,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
    </>
  );
}