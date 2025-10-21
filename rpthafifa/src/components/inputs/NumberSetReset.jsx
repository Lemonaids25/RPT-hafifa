import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../inputs/RotationBox.css';

export default function NumberSetReset({ onSet, onPreview, onPreviewClear, placeholder = 'Value', min, max, step = 1, validate }) {
  const [inputValue, setInputValue] = useState('');

  const parse = useCallback((raw) => {
    const s = String(raw ?? '').trim();
    if (s === '' || s === '-' || s === '.') return null;
    const n = Number(s);
    if (!Number.isFinite(n)) return null;
    let v = n;
    if (typeof min === 'number') v = Math.max(min, v);
    if (typeof max === 'number') v = Math.min(max, v);
    if (typeof validate === 'function' && !validate(v)) return null;
    return v;
  }, [min, max, validate]);

  const handleSet = useCallback(() => {
    const v = parse(inputValue);
    onSet(v ?? 0);
    setInputValue('');
    if (onPreviewClear) onPreviewClear();
  }, [inputValue, onSet, parse, onPreviewClear]);

  const handleChange = useCallback((e) => {
    const val = e.target.value;
    setInputValue(val);
    if (onPreview) onPreview(parse(val));
  }, [parse, onPreview]);

  return (
    <div className="rotation-box">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="rotation-box-input"
        inputMode="numeric"
        placeholder={placeholder}
        step={step}
      />
      <button className="rotation-box-button" onClick={handleSet}>Set</button>
    </div>
  );
}

NumberSetReset.propTypes = {
  onSet: PropTypes.func.isRequired,
  onPreview: PropTypes.func,
  onPreviewClear: PropTypes.func,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  validate: PropTypes.func
};
