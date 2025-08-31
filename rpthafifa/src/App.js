import React from 'react';
import Compass from './components/compass';
import TankHull from './components/tankHull';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', background: '#fff' }}>
      <Compass />
      <TankHull />
    </div>
  );
}

export default App;