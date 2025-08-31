import React, {useState} from 'react';
import Compass from './components/compass';
import TankHull from './components/tankHull';
import TankTurret from './components/tankTurret';
import DegreeDisplay from './components/DegreeDisplay';


function App() {
  const [compassDegree, setCompassDegree] = useState(0);
  const [hullDegree, setHullDegree] = useState(0);
  const [turretDegree, setTurretDegree] = useState(0);

    return (
    <div>
      <DegreeDisplay
        values={[
          { label: 'Compass', value: compassDegree },
          { label: 'Hull', value: hullDegree },
          { label: 'Turret', value: turretDegree }
        ]}
        position={{
          position: 'fixed',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      <Compass degree={compassDegree} setDegree={setCompassDegree} />
      <TankHull degree={hullDegree} setDegree={setHullDegree} />
      <TankTurret degree={turretDegree} setDegree={setTurretDegree} />
    </div>
  );
}
export default App;