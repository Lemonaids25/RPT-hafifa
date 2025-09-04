import React from 'react';

import { HullLayout, TurretLayout, SightLayout, CompassLayout } from './layouts/TankLayouts';



function App() {
  return (
    <div>
      <CompassLayout />
      <HullLayout />
      <TurretLayout />
      <SightLayout />
    </div>
  );
}

export default App;