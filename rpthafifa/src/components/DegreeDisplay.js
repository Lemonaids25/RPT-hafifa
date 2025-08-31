import React from 'react';

const styles = [
  {
    background: '#eaffea',
    border: '2px solid #2ecc40',
    color: '#2ecc40',
    boxShadow: '0 2px 8px #2ecc4033'
  },
  {
    background: '#fff5e6',
    border: '2px solid #ff851b',
    color: '#ff851b',
    boxShadow: '0 2px 8px #ff851b33'
  },
  {
    background: '#eaffea',
    border: '2px solid #2ecc40',
    color: '#2ecc40',
    boxShadow: '0 2px 8px #2ecc4033'
  }
];

export default function DegreeDisplay({ values, position = {} }) {
  // values: [{ label: 'Compass', value: 0 }, { label: 'Hull', value: 0 }, ...]
  return (
    <div
      style={{
        display: 'flex',
        gap: 24,
        zIndex: 100,
        ...position
      }}
    >
      {values.map((item, idx) => (
        <div
          key={item.label}
          style={{
            ...styles[idx % styles.length],
            borderRadius: 8,
            padding: '8px 18px',
            minWidth: 90,
            textAlign: 'center',
            fontWeight: 600,
            fontSize: '1.1rem'
          }}
        >
          {item.label}<br />
          <span style={{ fontSize: '1.3rem' }}>{item.value}°</span>
        </div>
      ))}
    </div>
  );
}