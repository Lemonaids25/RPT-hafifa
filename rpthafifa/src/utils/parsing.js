export function parseNumericInput(raw, { min, max, validate } = {}) {
    const s = String(raw ?? '').trim();
    if (s === '' || s === '-' || s === '.') return null;
    const n = Number(s);
    if (!Number.isFinite(n)) return null;
    let v = n;
    if (typeof min === 'number') v = Math.max(min, v);
    if (typeof max === 'number') v = Math.min(max, v);
    if (typeof validate === 'function' && !validate(v)) return null;
    return v;
  }
  