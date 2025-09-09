
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
