const nextExps = [
	0, 54, 71, 108, 128, 164, 202, 244, 274, 315, 345, 376, 407, 419, 429, 440, 454, 469, 483, 497,
	515, 537, 558, 579, 600, 622, 643, 665, 686, 708, 729, 748, 766, 785, 803, 821, 839, 857, 875,
	893, 910, 928, 945, 963, 980, 997, 1015, 1032, 1049, 1066, 1362, 1562, 1747, 1946, 2195
];

export const calcRequiredExp = (
	currentLevel: number,
	targetLevel: number,
	expTable: string,
	nature: string
) => {
	let requiredExp = 0;
	for (let i = currentLevel; i < targetLevel; i++) {
		requiredExp += nextExps[i];
	}
	if (expTable === '900') {
		return Math.floor(requiredExp * 1.5);
	}
	return requiredExp;
};
