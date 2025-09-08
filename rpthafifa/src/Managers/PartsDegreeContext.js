import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

// Parts supported across the app
export const PARTS = ['Hull', 'Turret', 'Commander Sight', 'Pitch', 'Roll'];

const PartsDegreeContext = createContext(null);

export function PartsDegreeProvider({ children, initial = { Hull: 0, Turret: 0, 'Commander Sight': 0, Pitch: 0, Roll: 0 } }) {
  const [hull, setHull] = useState(initial.Hull ?? 0);
  const [turret, setTurret] = useState(initial.Turret ?? 0);
  const [sight, setSight] = useState(initial['Commander Sight'] ?? 0);
  const [pitch, setPitch] = useState(initial.Pitch ?? 0);
  const [roll, setRoll] = useState(initial.Roll ?? 0);

  const setMap = {
    Hull: setHull,
    Turret: setTurret,
    'Commander Sight': setSight,
    Pitch: setPitch,
    Roll: setRoll,
  };

  const degreeMap = {
    Hull: hull,
    Turret: turret,
    'Commander Sight': sight,
    Pitch: pitch,
    Roll: roll,
  };

  const value = useMemo(() => {
    return {
      getDegree: (part) => degreeMap[part] ?? 0,
      setDegree: (part, val) => {
        const setter = setMap[part];
        if (setter) setter(val);
      },
      resetDegree: (part) => {
        const setter = setMap[part];
        if (setter) setter(0);
      },
    };
  }, [hull, turret, sight, pitch, roll]);

  return <PartsDegreeContext.Provider value={value}>{children}</PartsDegreeContext.Provider>;
}

export function usePartDegree(part) {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('usePartDegree must be used within PartsDegreeProvider');
  const degree = ctx.getDegree(part);
  const onSet = useCallback((v) => ctx.setDegree(part, v), [ctx, part]);
  const onReset = useCallback(() => ctx.resetDegree(part), [ctx, part]);
  return { degree, onSet, onReset };
}
