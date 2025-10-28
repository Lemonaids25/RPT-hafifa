import React, { useState, useCallback } from 'react';
import { parseNumericInput, createPlaceholderText, determineValueToSet, createHandleChange, createHandleKeyDown } from './const';
import './RotationBox.css';

export default function NumberSetReset({ onSet, onPreview, onPreviewClear, placeholder = 'Value', currentValue, min, max, step = 1, validate }) {
  const [inputValue, setInputValue] = useState('');

  const parse = useCallback((raw) => 
    parseNumericInput(raw, min, max, validate), 
    [min, max, validate]
  );

  const handleSet = useCallback(() => {
    const parsedValue = parse(inputValue);
    const valueToSet = determineValueToSet(parsedValue, currentValue);
    onSet(valueToSet);
    setInputValue('');
    onPreviewClear?.();
  }, [inputValue, onSet, parse, onPreviewClear, currentValue]);

  const handleChange = useCallback(
    createHandleChange(setInputValue, onPreview, parse),
    [onPreview, parse]
  );

  const handleKeyDown = useCallback(
    createHandleKeyDown(handleSet),
    [handleSet]
  );

  const displayPlaceholder = createPlaceholderText(placeholder, currentValue);

  return (
    <div className="rotation-box">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="rotation-box-input"
        inputMode="numeric"
        placeholder={displayPlaceholder}
        step={step}
      />
      <button className="rotation-box-button" onClick={handleSet}>Set</button>
    </div>
  );
}

