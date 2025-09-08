// Normalize an angle to [0, 360)
export function normalize360(v) {
  const n = Number(v) || 0;
  return ((n % 360) + 360) % 360;
}

// Normalize an angle to [-180, 180]
export function normalize180(v) {
  const n = normalize360(v);
  return n > 180 ? n - 360 : n;
}

// Compute shortest signed delta from 'from' to 'to' in degrees
export function shortestDelta(from, to) {
  const a = normalize360(from);
  const b = normalize360(to);
  let d = b - a;
  if (d > 180) d -= 360;
  if (d < -180) d += 360;
  return d;
}

// Coerce a degree value to a finite number, falling back to 0 by default
export function coerceDegree(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

// Advance the current angle toward target using the shortest path
export function nextAngleShortest(current, target) {
  const t = coerceDegree(target, 0);
  return current + shortestDelta(current, t);
}
