import React from 'react';
import PropTypes from 'prop-types';
import { usePartDegree } from '../../../contexts/PartsDegreeContext';
import { usePartPreview } from '../../../contexts/PreviewDegreeContext';
import NumberSetReset from '../inputs/NumberSetReset';

function RotationRow({ partId, label }) {
  const { degree, onSet } = usePartDegree(partId);
  const { setPreview, clearPreview } = usePartPreview(partId);
  
  return (
    <NumberSetReset 
      placeholder={label} 
      currentValue={degree}
      onSet={onSet} 
      onPreview={setPreview} 
      onPreviewClear={clearPreview} 
    />
  );
}

export default RotationRow;
