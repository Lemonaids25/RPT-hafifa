export const hullConfig = {
  label: 'Hull',
  className: 'hull'
};

export const turretConfig = {
  label: 'Turret',
  className: 'turret'
};

export const sightConfig = {
  label: 'Commander Sight',
  className: 'sight'
};

export const getDegreeConfig = (part) => {
  if (part === 'Hull') return hullConfig;
  if (part === 'Turret') return turretConfig;
  if (part === 'Commander Sight') return sightConfig;
  return {};
};