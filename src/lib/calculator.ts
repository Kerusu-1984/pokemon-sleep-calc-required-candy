const totalExps = [
	0, 54, 125, 233, 361, 525, 727, 971, 1245, 1560, 1905, 2281, 2688, 3107, 3536, 3976, 4430, 4899,
	5382, 5879, 6394, 6931, 7489, 8068, 8668, 9290, 9933, 10598, 11284, 11992, 12721, 13469, 14235,
	15020, 15823, 16644, 17483, 18340, 19215, 20108, 21018, 21946, 22891, 23854, 24834, 25831, 26846,
	27878, 28927, 29993, 31355, 32917, 34664, 36610, 38805, 41084, 43488, 46021, 48687, 51493
];

const dreamShardsPerCandy = [
	0, 14, 18, 22, 27, 30, 34, 39, 44, 48, 50, 52, 53, 56, 59, 62, 66, 68, 71, 74, 78, 81, 85, 88, 92,
	95, 100, 105, 111, 117, 122, 126, 130, 136, 143, 151, 160, 167, 174, 184, 192, 201, 211, 221, 227,
	236, 250, 264, 279, 295, 309, 323, 338, 356, 372, 391, 437, 486, 538, 593
];

const expTypeToRatio = {
	'600': 1,
	'900': 1.5,
	'1080': 1.8
};

export type ExpType = keyof typeof expTypeToRatio;

const natureToCandyExp = {
	down: 21,
	normal: 25,
	up: 30
};

export type Nature = keyof typeof natureToCandyExp;

export type CandyBoostEvent = 'none' | 'boost' | 'miniBoost';

export const calcRequiredExp = (currentLevel: number, targetLevel: number, expType: ExpType) => {
	if (currentLevel >= targetLevel) {
		return 0;
	}
	const ratio = expTypeToRatio[expType];
	const currentExp = Math.round(totalExps[currentLevel - 1] * ratio);
	const targetExp = Math.round(totalExps[targetLevel - 1] * ratio);
	return targetExp - currentExp;
};

export const calcCandyExp = (nature: Nature) => {
	return natureToCandyExp[nature];
};

export const calcBoostedCandyExp = (nature: Nature) => {
	return natureToCandyExp[nature] * 2;
};
export const calcRequiredCandy = (
	currentLevel: number,
	targetLevel: number,
	nature: Nature,
	expType: ExpType
) => {
	const requiredExp = calcRequiredExp(currentLevel, targetLevel, expType);
	const candyExp = calcCandyExp(nature);
	return Math.ceil(requiredExp / candyExp);
};

export const calcRequiredBoostedCandy = (
	currentLevel: number,
	targetLevel: number,
	nature: Nature,
	expType: ExpType
) => {
	const requiredExp = calcRequiredExp(currentLevel, targetLevel, expType);
	const candyExp = calcBoostedCandyExp(nature);
	return Math.ceil(requiredExp / candyExp);
};

export const calcRequiredDreamShards = (
	currentLevel: number,
	targetLevel: number,
	nature: Nature,
	expType: ExpType
) => {
	let dreamShardsSum = 0;
	let carry = 0;
	for (let level = currentLevel; level < targetLevel; level++) {
		const requiredExp = calcRequiredExp(level, level + 1, expType) - carry;
		const requiredcandy = Math.ceil(requiredExp / calcCandyExp(nature));
		dreamShardsSum += dreamShardsPerCandy[level] * requiredcandy;
		carry = calcCandyExp(nature) * requiredcandy - requiredExp;
	}
	return dreamShardsSum;
};

export const calcRequiredBoostedDreamShards = (
	currentLevel: number,
	targetLevel: number,
	nature: Nature,
	expType: ExpType
) => {
	let dreamShardsSum = 0;
	let carry = 0;
	for (let level = currentLevel; level < targetLevel; level++) {
		const requiredExp = calcRequiredExp(level, level + 1, expType) - carry;
		const requiredcandy = Math.ceil(requiredExp / calcBoostedCandyExp(nature));
		dreamShardsSum += dreamShardsPerCandy[level] * requiredcandy * 6;
		carry =
			calcBoostedCandyExp(nature) * requiredcandy - requiredExp;
	}
	return dreamShardsSum;
};

export const calcRequiredMiniBoostedDreamShards = (
	currentLevel: number,
	targetLevel: number,
	nature: Nature,
	expType: ExpType
) => {
	let dreamShardsSum = 0;
	let carry = 0;
	for (let level = currentLevel; level < targetLevel; level++) {
		const requiredExp = calcRequiredExp(level, level + 1, expType) - carry;
		const requiredcandy = Math.ceil(requiredExp / calcBoostedCandyExp(nature));
		dreamShardsSum += dreamShardsPerCandy[level] * requiredcandy * 4;
		carry =
			calcBoostedCandyExp(nature) * requiredcandy - requiredExp;
	}
	return dreamShardsSum;
};

export const Calculator = (event: CandyBoostEvent) => {
	switch (event) {
		case 'boost':
			return {
				calcRequiredCandy: calcRequiredBoostedCandy,
				calcRequiredDreamShards: calcRequiredBoostedDreamShards,
				calcRequiredExp
			};
		case 'miniBoost':
			return {
				calcRequiredCandy: calcRequiredBoostedCandy,
				calcRequiredDreamShards: calcRequiredMiniBoostedDreamShards,
				calcRequiredExp
			};
		default:
			return {
				calcRequiredCandy,
				calcRequiredDreamShards,
				calcRequiredExp
			};
	}
};
