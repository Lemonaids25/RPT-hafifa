import { usePartDegree } from '../contexts/PartsDegreeContext';
import { usePartPreview } from '../contexts/PreviewDegreeContext';

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
