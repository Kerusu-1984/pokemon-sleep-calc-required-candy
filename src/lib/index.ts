// place files you want to import through the `$lib` alias in this folder.
const nextExps = [
	0, 54, 71, 108, 128, 164, 202, 244, 274, 315, 345, 376, 407, 419, 429, 440, 454, 469, 483, 497,
	515, 537, 558, 579, 600, 622, 643, 665, 686, 708, 729, 748, 766, 785, 803, 821, 839, 857, 875,
	893, 910, 928, 945, 963, 980, 997, 1015, 1032, 1049, 1066
];

const baseExp = 25;

export type ExpTable = '600' | '900';

export const calcRequiredExp = (
	currentLevel: number,
	targetLevel: number,
	expTable: ExpTable
): number => {
	const requiredExp = nextExps.slice(currentLevel, targetLevel).reduce((acc, cur) => {
		return acc + adjustRequiredExpWithExpTable(cur, expTable);
	}, 0);
	return requiredExp;
};

export const calcRequiredCandy = (exp: number, candyExp: number): number => {
	return Math.ceil(exp / candyExp);
};

export const calcCandyExp = (nature: number, isBoosted = false): number => {
	const boost = isBoosted ? 2 : 1;
	return Math.round(baseExp * nature * boost);
}
export const adjustRequiredExpWithExpTable = (exp: number, expTable: ExpTable) => {
	if (expTable === '900') {
		return Math.ceil(exp * 1.5);
	}
	return exp;
}