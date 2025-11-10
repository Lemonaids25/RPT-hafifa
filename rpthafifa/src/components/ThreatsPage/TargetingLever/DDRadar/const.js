// Constants for DD Radar display
export const DD_MAX_DISTANCE = 3000;

export const DD_RANGE_CIRCLES = [
  { distance: 3000, label: '3000m', className: 'dd-circle-3000' },
  { distance: 2000, label: '2000m', className: 'dd-circle-2000' },
  { distance: 1000, label: '1000m', className: 'dd-circle-1000' }
];

// Calculate rotation for indicators relative to hull
export const calculateNorthRotation = (hullDegree) => -hullDegree;

export const calculateRelativeRotation = (targetDegree, hullDegree) => 
  targetDegree - hullDegree;
