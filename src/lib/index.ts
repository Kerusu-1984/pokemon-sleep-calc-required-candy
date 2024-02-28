// place files you want to import through the `$lib` alias in this folder.
const nextExps = [
	0, 54, 71, 108, 128, 164, 202, 244, 274, 315, 345, 376, 407, 419, 429, 440, 454, 469, 483, 497,
	515, 537, 558, 579, 600, 622, 643, 665, 686, 708, 729, 748, 766, 785, 803, 821, 839, 857, 875,
	893, 910, 928, 945, 963, 980, 997, 1015, 1032, 1049, 1066
];

const dreamShardsPerCandy = [
	0, 14, 18, 22, 27, 30, 34, 39, 44, 48, 50, 52, 53, 56, 59, 62, 66, 68, 71, 74, 78, 81, 85, 88, 92,
	95, 100, 105, 111, 117, 122, 126, 130, 136, 143, 151, 160, 167, 174, 184, 192, 201, 211, 221, 227,
	236, 250, 264, 279, 295
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

export const calcCandyExp = (nature: number, isBoosted: boolean = false): number => {
	const boost = isBoosted ? 2 : 1;
	return Math.round(baseExp * nature) * boost;
};

export const calcRequiredDreamShards = (
	currentLevel: number,
	targetLevel: number,
	expTable: ExpTable,
	candyExp: number,
	boostRatio: number
): number => {
	let dreamShardsSum = 0;
	let currentExp = 0;
	for (let level = currentLevel; level < targetLevel; level++) {
		const requiredExp = adjustRequiredExpWithExpTable(nextExps[level], expTable);
		const expDiff = requiredExp - currentExp;
		const dreamShards = Math.ceil(expDiff / candyExp) * dreamShardsPerCandy[level];
		dreamShardsSum += dreamShards;
		currentExp = expDiff % candyExp == 0 ? 0 : candyExp - (expDiff % candyExp);
	}
	return dreamShardsSum * boostRatio;
};

export const adjustRequiredExpWithExpTable = (exp: number, expTable: ExpTable): number => {
	if (expTable === '900') {
		return Math.ceil(exp * 1.5);
	}
	return exp;
};
