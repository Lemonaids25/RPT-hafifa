// In src/hooks/usePartPreview.jsx
import { useContext } from 'react';
import { PreviewDegreeContext } from '../Managers/PreviewDegreeContext';

export function usePartPreview(part) {
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
