// place files you want to import through the `$lib` alias in this folder.
const nextExps = [
	0, 54, 71, 108, 128, 164, 202, 244, 274, 315, 345, 376, 407, 419, 429, 440, 454, 469, 483, 497,
	515, 537, 558, 579, 600, 622, 643, 665, 686, 708
];

export const calcRequiredExp = (currentLevel: number, targetLevel: number): number => {
	let requiredExp: number = 0;
	for (let i = currentLevel; i < targetLevel; i++) {
		requiredExp += nextExps[i];
	}
	return requiredExp;
};

export const calcRequiredCandy = (exp: number): number => {
	const candyExp = 25;
	return Math.ceil(exp / candyExp);
};
