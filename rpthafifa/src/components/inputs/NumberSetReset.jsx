import React, { useState, useCallback } from 'react';
import '../../Containers/RotationBoxes/RotationBox.css';
import { parseNumericInput } from '../../utils/parsing';

export default function NumberSetReset({ onSetDegree, onPreview, onPreviewClear, placeholder = 'Value', min, max, step = 1, validate }) {
  const [inputValue, setInputValue] = useState('');

  const parse = useCallback((raw) => {
    return parseNumericInput(raw, { min, max, validate });
  }, [min, max, validate]);

  // to move to utils?
  const handleSetDegree = useCallback(() => {
    const v = parse(inputValue);
    onSetDegree(v ?? 0);
    setInputValue('');
    if (onPreviewClear) onPreviewClear();
  }, [inputValue, onSetDegree, parse, onPreviewClear]);

  const handleChangeDegree = useCallback((e) => {
    const val = e.target.value;
    setInputValue(val);
    if (onPreview) onPreview(parse(val));
  }, [parse, onPreview]);

  return (
    <div id="rotation-box-id">
      <input
        type="text"
        value={inputValue}
        onChange={handleChangeDegree}
        onInput={handleChangeDegree}
        className="rotation-box-input"
        inputMode="numeric"
        placeholder={placeholder}
        step={step}
      />
      <button className="rotation-box-button" onClick={handleSetDegree}>Set</button>
    </div>
  );
}
