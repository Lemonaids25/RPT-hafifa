import React from 'react';
import PropTypes from 'prop-types';
import './DegreeDisplay.css';
import { normalize360Rounded } from '../../../utils/angles';
//change label to be the degree
export default function DegreeDisplay({ label, value, className = '', style = {} }) {
  const normalizedValue = normalize360Rounded(value);
  return (
    <div className={`degree-display-box ${className}`} style={style}>
      {label}<br />
      <span>{normalizedValue}°</span>
    </div>
  );
}

