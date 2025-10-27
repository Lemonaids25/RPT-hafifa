import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../inputs/RotationBox.css';

export default function NumberSetReset({ onSet, onPreview, onPreviewClear, placeholder = 'Value', currentValue, min, max, step = 1, validate }) {
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
    if (v !== null) {
      onSet(v);
    } else if (typeof currentValue === 'number') {
      onSet(currentValue);
    } else {
      onSet(0);
    }
    setInputValue('');
    if (onPreviewClear) onPreviewClear();
  }, [inputValue, onSet, parse, onPreviewClear, currentValue]);

  const handleChange = useCallback((e) => {
    const val = e.target.value;
    setInputValue(val);
    if (onPreview) onPreview(parse(val));
  }, [parse, onPreview]);

  const displayPlaceholder = typeof currentValue === 'number' 
    ? `${placeholder} (${currentValue}°)` 
    : placeholder;

  return (
    <div className="rotation-box">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="rotation-box-input"
        inputMode="numeric"
        placeholder={displayPlaceholder}
        step={step}
      />
      <button className="rotation-box-button" onClick={handleSet}>Set</button>
    </div>
  );
}

