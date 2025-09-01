import React from 'react';
import TankComponent from './components/TankComponent';
import RotationBox from './components/RotationBox';
import TankManager from './Managers/TankManager';
import tankHullPng from './assets/tank-hull.png';
import tankTurretPng from './assets/tank-turret.png';
import commanderSight from './assets/commander-sight.png';
import Compass from './assets/360-degrees.png';
import {TANK_COMPONENT_TOP, INPUT_BOX_BASE_TOP, INPUT_BOX_LEFT_PERC, INPUT_BOX_SPACING, TANK_COMPONENT_WIDTH } from './constants.js';

function App() {
  return (
    <div>
      {/* compass */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <TankComponent
              src={Compass}
              degree={degree + 90}
              alt="Tank Hull"
              style={{
                top: `${TANK_COMPONENT_TOP}px`,
                width: {TANK_COMPONENT_WIDTH},
                height: 'auto'
              }}
            />
          </>
        )}
      </TankManager>
      
      {/* Hull */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <RotationBox
              onSet={handleSet}
              onReset={handleReset}
              placeholder="Hull Rotation"
              style={{
                position: 'absolute',
                top: INPUT_BOX_BASE_TOP,
                left: `${INPUT_BOX_LEFT_PERC}%`
              }}
            />
            <TankComponent
              src={tankHullPng}
              degree={degree}
              alt="Tank Hull"
              style={{
                top: `${TANK_COMPONENT_TOP}px`,
                width: {TANK_COMPONENT_WIDTH},
                height: 'auto'
              }}
            />
          </>
        )}
      </TankManager>

      {/* Turret */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <RotationBox
              onSet={handleSet}
              onReset={handleReset}
              placeholder="Turret Rotation"
              style={{
                position: 'absolute',
                top: INPUT_BOX_SPACING,
                left: `${INPUT_BOX_LEFT_PERC}%`
              }}
            />
            <TankComponent
              src={tankTurretPng}
              degree={degree}
              alt="Tank Turret"
              style={{
                top: `${TANK_COMPONENT_TOP}px`,
                width: {TANK_COMPONENT_WIDTH},
                height: 'auto'
              }}
            />
          </>
        )}
      </TankManager>

      {/* Commander Sight */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <RotationBox
              onSet={handleSet}
              onReset={handleReset}
              placeholder="Sight Rotation"
              style={{
                position: 'absolute',
                top: (INPUT_BOX_SPACING * 2) - INPUT_BOX_BASE_TOP,
                left: `${INPUT_BOX_LEFT_PERC}%`
              }}
            />
            <TankComponent
              src={commanderSight}
              degree={degree}
              alt="Commander Sight"
              style={{
                top: `${TANK_COMPONENT_TOP}px`,
                width: {TANK_COMPONENT_WIDTH},
                height: 'auto'
              }}
            />
          </>
        )}
      </TankManager>
    </div>
  );
}

export default App;