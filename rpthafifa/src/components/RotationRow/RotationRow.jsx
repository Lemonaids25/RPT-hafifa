import React from 'react';
import PropTypes from 'prop-types';
import { usePartDegree } from '../../contexts/PartsDegreeContext';
import { usePartPreview } from '../../contexts/PreviewDegreeContext';
import NumberSetReset from '../inputs/NumberSetReset';

/**
 * RotationRow component that handles degree input for a single tank part
 * Manages both actual degree setting and preview functionality
 */
function RotationRow({ partId, label }) {
  const { onSet } = usePartDegree(partId);
  const { setPreview, clearPreview } = usePartPreview(partId);
  
  return (
    <NumberSetReset 
      placeholder={label} 
      onSet={onSet} 
      onPreview={setPreview} 
      onPreviewClear={clearPreview} 
    />
  );
}

RotationRow.propTypes = {
  partId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default RotationRow;
