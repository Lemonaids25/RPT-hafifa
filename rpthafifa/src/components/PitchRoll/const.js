

import sideView from '../../assets/tank-side-view.png';
import backView from '../../assets/tank-back-view.png';
import { classifyAngle } from '../../utils/status';

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

export function buildItems(gauges, stateById) {
	return gauges.map((g) => ({ ...g, ...stateById[g.id] }));
}

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

