// Shared constants for Pitch/Roll UI
// Keep only static metadata here; dynamic state (degrees, handlers) stays in the container.

import sideView from '../../assets/tank-side-view.png';
import backView from '../../assets/tank-back-view.png';

export const STATUS_THRESHOLDS = {
	green: 12,
	orange: 20,
};

export const GAUGES = [
	{
		id: 'Pitch',
		label: 'Pitch',
		alt: 'Pitch',
		src: sideView,
	},
	{
		id: 'Roll',
		label: 'Roll',
		alt: 'Roll',
		src: backView,
	},
];

