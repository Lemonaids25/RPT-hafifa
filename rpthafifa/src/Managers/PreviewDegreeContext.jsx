// In src/Managers/PreviewDegreeContext.jsx

import React, { createContext, useContext, useMemo, useState, useCallback } from 'react';
import { ROTATIONAL_PART_IDS } from '../config/parts';

export const PreviewDegreeContext = createContext(null);

// Create initial state dynamically
const initialPreviews = ROTATIONAL_PART_IDS.reduce((acc, partId) => {
  acc[partId] = 0; // Parts is '0', but preview is 'null'?
  return acc;
}, {});

export function PreviewDegreeProvider({ children }) {
  const [previews, setPreviews] = useState(initialPreviews);

  const setPreview = useCallback((part, value) => {
    setPreviews(p => ({ ...p, [part]: value }));
  }, []);

  const clearPreview = useCallback((part) => {
    setPreviews(p => ({ ...p, [part]: null }));
  }, []);


  return <PreviewDegreeContext.Provider value={{
    previews,
    setPreview,
    clearPreview,
  }}>{children}</PreviewDegreeContext.Provider>;
}

// Hook for a single part
export function usePartPreview(part) { // Extract to Context
  const ctx = useContext(PreviewDegreeContext);
  if (!ctx) throw new Error('usePartPreview must be used within a PreviewDegreeProvider');
  
  const { setPreview, clearPreview } = ctx;
  const preview = ctx.previews[part] ?? null;

  return {
    preview,
    setPreview: (value) => setPreview(part, value),
    clearPreview: () => clearPreview(part),
  };
}

// New hook to get all previews
export function useAllPreviews() {
  const ctx = useContext(PreviewDegreeContext);
  if (!ctx) throw new Error('useAllPreviews must be used within a PreviewDegreeProvider');
  return ctx.previews;
}