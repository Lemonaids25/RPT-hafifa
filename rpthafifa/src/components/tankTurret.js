import React, { useState } from 'react';
import tankTurretPng from '../assets/tank-turret.png';
import { INPUT_BOX_LEFT_PERC, INPUT_BOX_BASE_TOP, INPUT_BOX_SPACING, TANK_COMPONENT_WIDTH, TANK_COMPONENT_TOP } from '../constants';
import IncrementalRotationBox from './RotationBox.js';

function TankTurret({degree, setDegree}) {

    const handleSend = (rotation) => setDegree(rotation);
    const handleReset = () => setDegree(0);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: INPUT_BOX_BASE_TOP + INPUT_BOX_SPACING * 2,
          left: `${INPUT_BOX_LEFT_PERC}%`,
          transform: 'translateX(-50%)',
          zIndex: 10,
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center'
        }}
      >
       <IncrementalRotationBox
          onSend={handleSend}
          onReset={handleReset}
          placeholder="Turret Rotation"
        />
      </div>
      <img
        src={tankTurretPng}
        alt="Tank Turret"
        style={{
          position: 'absolute',
          left: '50%',
          top: `${TANK_COMPONENT_TOP}px`,
          transform: `translateX(-50%) rotate(${degree}deg)`,
          transition: 'transform 0.3s',
          width: `${TANK_COMPONENT_WIDTH}px`,
          height: 'auto',
          zIndex: 3,
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      />
    </>
  );
}

export default TankTurret;