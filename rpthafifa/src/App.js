import React from 'react';
import TankComponent from './components/TankComponent';
import RotationBox from './components/RotationBox';
import TankManager from './Managers/TankManager';
import tankParts from './configs/tankPartsConfig.js';



function App() {
  return (
    <div>
      {tankParts.map((part, idx) =>
        part.isStatic ? (
          <TankComponent
            key={part.alt}
            src={part.src}
            degree={0}
            alt={part.alt}
            style={part.tankStyle}
          />
        ) : (
          <TankManager key={part.alt}>
            {({ degree, handleSet, handleReset }) => (
              <>
                <RotationBox
                  onSet={handleSet}
                  onReset={handleReset}
                  placeholder={part.placeholder}
                  style={part.rotationBoxStyle}
                />
                <TankComponent
                  src={part.src}
                  degree={degree}
                  alt={part.alt}
                  style={part.tankStyle}
                />
              </>
            )}
          </TankManager>
        )
      )}
    </div>
  );
}

export default App;