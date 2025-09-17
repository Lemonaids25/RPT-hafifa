import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { ALL_PART_IDS, PARTS_CONFIG } from '../config/parts'; // Import from new config | CR -> Remove unused comments

const PartsDegreeContext = createContext(null);

// Create initial state dynamically from the config
const initialDegrees = ALL_PART_IDS.reduce((acc, partId) => {
  acc[partId] = 0;
  return acc;
}, {});

export function PartsDegreeProvider({children}) { // Initial twice?
  const [degrees, setDegrees] = useState({ ...initialDegrees});
  const [referencePart, setReferencePart] = useState(null);

  const getDegree = useCallback((part) => degrees[part] ?? 0, [degrees]);

  const setDegree = useCallback((part, val) => {
    if (PARTS_CONFIG[part]) {
      setDegrees(d => ({ ...d, [part]: val }));
    }
  }, []);

  return <PartsDegreeContext.Provider value={{
    degrees, // Expose all degrees
    getDegree,
    setDegree,
    referencePart,
    setReferencePart,
  }}>{children}</PartsDegreeContext.Provider>;
}

export function usePartDegree(part) { // Enter Context Please
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('usePartDegree must be used within PartsDegreeProvider');
  const { getDegree, setDegree } = ctx;
  const degree = getDegree(part);
  const onSet = useCallback((v) => setDegree(part, v), [setDegree, part]);
  return { degree, onSet };
}

export function useAllDegrees() {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('useAllDegrees must be used within PartsDegreeProvider');
  return ctx.degrees;
}

export function useReferencePart() {
  const ctx = useContext(PartsDegreeContext);
  if (!ctx) throw new Error('useReferencePart must be used within PartsDegreeProvider');
  const { referencePart, setReferencePart } = ctx;
  return { referencePart, setReferencePart };
}
