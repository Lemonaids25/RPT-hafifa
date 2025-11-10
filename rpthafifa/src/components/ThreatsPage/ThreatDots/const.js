// Constants for threat visualization
export const THREAT_MAX_DISTANCE = 3000;
export const RADAR_CENTER_PERCENT = 50;
export const RADAR_RADIUS_PERCENT = 50;

// Convert polar coordinates (degrees, distance) to x,y position on radar
// Degrees are relative to hull, distance is 0-THREAT_MAX_DISTANCE
export const getThreatPosition = (degrees, distance) => {
  // Convert distance to percentage of radius
  const radiusPercent = (distance / THREAT_MAX_DISTANCE) * RADAR_RADIUS_PERCENT;
  
  // Convert degrees to radians, adjust for 0° being at top
  const angleInRadians = ((degrees - 90) * Math.PI) / 180;
  
  // Calculate x,y position (50% is center)
  const x = RADAR_CENTER_PERCENT + radiusPercent * Math.cos(angleInRadians);
  const y = RADAR_CENTER_PERCENT + radiusPercent * Math.sin(angleInRadians);
  
  return { x, y };
};
