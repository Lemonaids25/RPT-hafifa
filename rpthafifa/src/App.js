import React from 'react';
import degreePng from '/public/360-degrees.png'; // Make sure the file exists in src/

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff'
    }}>
      <img
        src="/360-degrees.png"
        alt="360 degree markings"
        style={{ maxWidth: '90vw', maxHeight: '90vh' }}
      />
    </div>
  );
}

export default App;