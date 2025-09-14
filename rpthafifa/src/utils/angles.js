
export function normalize360(v) {
  const n = Number(v) || 0;
  return ((n % 360) + 360) % 360;
}

export function normalize180(v) {
  const n = normalize360(v);
  return n > 180 ? n - 360 : n;
}

export function shortestDelta(from, to) {
  const a = normalize360(from);
  const b = normalize360(to);
  let d = b - a;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

export function coerceDegree(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

export function nextAngleShortest(current, target) {
  const t = coerceDegree(target, 0);
  return current + shortestDelta(current, t);
}


export function normalize360Rounded(v) {
  return Math.round(normalize360(v));
}

// Compute a map of relative degrees given an absolute degree map and a reference key
// degrees: Record<string, number>, refKey: string|null
// returns: Record<string, number> where ref is 0 and others are normalized to [-180,180] for logic or [0,360) for display
export function toRelativeDegrees(degrees, refKey, forDisplay = false) {
  if (!refKey || !(refKey in degrees)) return { ...degrees };
  const ref = degrees[refKey] ?? 0;
  const out = {};
  for (const k of Object.keys(degrees)) {   
    const delta = degrees[k] - ref;
    out[k] = forDisplay ? normalize360(delta) : normalize180(delta);
  }
  return out;
}

// Compute the compass rotation so that the selected reference part appears at 0
// absDegrees: Record<string, number>, refKey: string|null, base: number (default 90)
export function compassDegreeRelative(absDegrees, refKey, base = 90) {
  if (!refKey) return base;
  const refAbs = (absDegrees && refKey in absDegrees) ? absDegrees[refKey] : 0;
  return base - refAbs;
}
