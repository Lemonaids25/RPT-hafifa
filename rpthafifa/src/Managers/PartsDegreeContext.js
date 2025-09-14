import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';

export const PARTS = ['Hull', 'Turret', 'Commander Sight', 'Pitch', 'Roll'];

const PartsDegreeContext = createContext(null);

export function PartsDegreeProvider({ children, initial = { Hull: 0, Turret: 0, 'Commander Sight': 0, Pitch: 0, Roll: 0 } }) {
  const [hull, setHull] = useState(initial.Hull ?? 0);
  const [turret, setTurret] = useState(initial.Turret ?? 0);
  const [sight, setSight] = useState(initial['Commander Sight'] ?? 0);
  const [pitch, setPitch] = useState(initial.Pitch ?? 0);
  const [roll, setRoll] = useState(initial.Roll ?? 0);
  // Selected reference part for relative view (null -> absolute view)
  const [referencePart, setReferencePart] = useState(null);

  const setMap = useMemo(() => ({
    Hull: setHull,
    Turret: setTurret,
    'Commander Sight': setSight,
    Pitch: setPitch,
    Roll: setRoll,
  }), []);

  const degreeMap = useMemo(() => ({
    Hull: hull,
    Turret: turret,
    'Commander Sight': sight,
    Pitch: pitch,
    Roll: roll,
  }), [hull, turret, sight, pitch, roll]);

  const getDegree = useCallback((part) => degreeMap[part] ?? 0, [degreeMap]);
  const setDegree = useCallback((part, val) => {
    const setter = setMap[part];
    if (setter) setter(val);
  }, [setMap]);
  const resetDegree = useCallback((part) => {
    const setter = setMap[part];
    if (setter) setter(0);
  }, [setMap]);

  const value = useMemo(() => ({
    getDegree,
    setDegree,
    resetDegree,
    referencePart,
    setReferencePart,
  }), [getDegree, setDegree, resetDegree, referencePart]);

  return <PartsDegreeContext.Provider value={value}>{children}</PartsDegreeContext.Provider>;
}

export function usePartDegree(part) {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('usePartDegree must be used within PartsDegreeProvider');
  const { getDegree, setDegree, resetDegree } = ctx;
  const degree = getDegree(part);
  const onSet = useCallback((v) => setDegree(part, v), [setDegree, part]);
  const onReset = useCallback(() => resetDegree(part), [resetDegree, part]);
  return { degree, onSet, onReset };
}

export function useReferencePart() {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('useReferencePart must be used within PartsDegreeProvider');
  const { referencePart, setReferencePart } = ctx;
  return { referencePart, setReferencePart };
}
