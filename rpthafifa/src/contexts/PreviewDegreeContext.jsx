import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

const PreviewDegreeContext = createContext(null);

export function PreviewDegreeProvider({ children }) {
  const [preview, setPreview] = useState({});

  const setPreviewDegree = useCallback((part, val) => {
    setPreview((p) => {
      const next = { ...p };
      if (val === null || val === undefined || Number.isNaN(val)) delete next[part];
      else next[part] = val;
      return next;
    });
  }, []);

  const clearPreviewDegree = useCallback((part) => {
    setPreview((p) => {
      if (!(part in p)) return p;
      const next = { ...p };
      delete next[part];
      return next;
    });
  }, []);

  const value = useMemo(() => ({ preview, setPreviewDegree, clearPreviewDegree }), [preview, setPreviewDegree, clearPreviewDegree]);

  return <PreviewDegreeContext.Provider value={value}>{children}</PreviewDegreeContext.Provider>;
}

export function usePartPreview(part) {
  const ctx = useContext(PreviewDegreeContext);
  if (!ctx) throw new Error('usePartPreview must be used within PreviewDegreeProvider');
  const { preview, setPreviewDegree, clearPreviewDegree } = ctx;
  const value = preview?.[part];
  const set = useCallback((val) => setPreviewDegree(part, val), [setPreviewDegree, part]);
  const clear = useCallback(() => clearPreviewDegree(part), [clearPreviewDegree, part]);
  return { preview: value, setPreview: set, clearPreview: clear };
}

export default PreviewDegreeContext;
