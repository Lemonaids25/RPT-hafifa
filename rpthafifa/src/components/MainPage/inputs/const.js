export function parseNumericInput(raw, min, max, validate) {
  const s = String(raw ?? '').trim();
  if (!s || s === '-' || s === '.') return null;
  const n = Number(s);
  if (!Number.isFinite(n)) return null;
  let value = n;
  if (min !== undefined) value = Math.max(min, value);
  if (max !== undefined) value = Math.min(max, value);
  if (validate && !validate(value)) return null;
  return value;
}

export function createPlaceholderText(placeholder, currentValue) {
  return typeof currentValue === 'number' 
    ? `${placeholder} (${currentValue}°)` 
    : placeholder;
}

export function determineValueToSet(parsedValue, currentValue) {
  return parsedValue ?? currentValue ?? 0;
}

export function createHandleChange(setInputValue, onPreview, parse) {
  return (e) => {
    const val = e.target.value;
    setInputValue(val);
    if (onPreview) onPreview(parse(val));
  };
}

export function createHandleKeyDown(handleSet) {
  return (e) => {
    if (e.key === 'Enter') {
      handleSet();
    }
  };
}
