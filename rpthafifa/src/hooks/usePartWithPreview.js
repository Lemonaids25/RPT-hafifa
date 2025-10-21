import { usePartDegree } from '../contexts/PartsDegreeContext';
import { usePartPreview } from '../contexts/PreviewDegreeContext';

/**
 * Custom hook that combines part degree and preview functionality
 * @param {string} partId - The part identifier
 * @returns {Object} Object containing degree state and preview handlers
 */
export function usePartWithPreview(partId) {
  const { degree, onSet } = usePartDegree(partId);
  const { preview, setPreview, clearPreview } = usePartPreview(partId);
  
  return {
    degree,
    onSet,
    preview,
    setPreview,
    clearPreview
  };
}
