// place files you want to import through the `$lib` alias in this folder.
const nextExps = [
	0, 54, 71, 108, 128, 164, 202, 244, 274, 315, 345, 376, 407, 419, 429, 440, 454, 469, 483, 497,
	515, 537, 558, 579, 600, 622, 643, 665, 686, 708
];

export type ExpTable = '600' | '900';

export const calcRequiredExp = (
	currentLevel: number,
	targetLevel: number,
	ExpTable: ExpTable
): number => {
	const requiredExp = nextExps.slice(currentLevel, targetLevel).reduce((acc, cur) => {
		if (ExpTable === '600') {
			return acc + cur;
		} else if (ExpTable === '900') {
			return acc + Math.ceil(cur * 1.5);
		}
		return acc;
	}, 0);
	return requiredExp;
};

export const calcRequiredCandy = (exp: number, candyExp: number): number => {
	return Math.ceil(exp / candyExp);
};
