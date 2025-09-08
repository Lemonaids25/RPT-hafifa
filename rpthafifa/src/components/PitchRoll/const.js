// Shared constants for Pitch/Roll UI
// Keep only static metadata here; dynamic state (degrees, handlers) stays in the container.

import sideView from '../../assets/tank-side-view.png';
import backView from '../../assets/tank-back-view.png';
import { classifyAngle } from '../../utils/status';

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

// Merge static gauge metadata with dynamic per-id state
export function buildItems(gauges, stateById) {
	return gauges.map((g) => ({ ...g, ...stateById[g.id] }));
}

// Build the dynamic state map by id; derives statuses from degrees using thresholds
export function buildStateById(pitch, roll) {
	const pitchStatus = classifyAngle(pitch.degree, STATUS_THRESHOLDS);
	const rollStatus = classifyAngle(roll.degree, STATUS_THRESHOLDS);
        
	return {
		Pitch: {
			degree: pitch.degree,
			onSet: pitch.onSet,
			onReset: pitch.onReset,
			status: pitchStatus,
		},
		Roll: {
			degree: roll.degree,
			onSet: roll.onSet,
			onReset: roll.onReset,
			status: rollStatus,
		},
	};
}

