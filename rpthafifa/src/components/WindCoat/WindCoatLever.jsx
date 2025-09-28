import React from 'react';
import './WindCoat.css';

const WindCoatLever = ({ position, setPosition }) => {
  const positions = ['scan', 'standBy', 'off'];

  return (
    <div className="wind-coat-lever">
      {positions.map((pos) => (
        <div key={pos} className="lever-position">
          <input
            type="radio"
            id={pos}
            name="windcoat-lever"
            value={pos}
            checked={position === pos}
            onChange={() => setPosition(pos)}
          />
          <label htmlFor={pos}>{pos.charAt(0).toUpperCase() + pos.slice(1)}</label>
        </div>
      ))}
    </div>
  );
};

export default WindCoatLever;
