// Shared constants for Pitch/Roll UI
// Keep only static metadata here; dynamic state (degrees, handlers) stays in the container.

import sideView from '../../assets/tank-side-view.png';
import backView from '../../assets/tank-back-view.png';
import { classifyAngle } from '../../utils/status';

// Thresholds now default from utils/status; override per-call by passing a second arg to classifyAngle if needed.

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
	const pitchStatus = classifyAngle(pitch.degree);
	const rollStatus = classifyAngle(roll.degree);

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

