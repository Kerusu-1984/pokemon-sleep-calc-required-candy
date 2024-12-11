import {
	calcBoostedCandyExp,
	calcCandyExp,
	calcRequiredBoostedCandy,
	calcRequiredBoostedDreamShards,
	calcRequiredCandy,
	calcRequiredDreamShards,
	calcRequiredExp,
	calcRequiredMiniBoostedDreamShards
} from './calculator';

test('exp', () => {
	expect(calcRequiredExp(24, 25, '600')).toBe(600);
	expect(calcRequiredExp(20, 21, '600')).toBe(515);
	expect(calcRequiredExp(1, 2, '600')).toBe(54);
	expect(calcRequiredExp(20, 22, '600')).toBe(1052);
	expect(calcRequiredExp(19, 21, '600')).toBe(1012);
	expect(calcRequiredExp(20, 23, '600')).toBe(1610);
	expect(calcRequiredExp(19, 22, '600')).toBe(1549);
	expect(calcRequiredExp(20, 24, '600')).toBe(2189);
	expect(calcRequiredExp(2, 3, '900')).toBe(107);
	expect(calcRequiredExp(9, 10, '900')).toBe(472);
	expect(calcRequiredExp(10, 11, '900')).toBe(518);
	expect(calcRequiredExp(10, 12, '900')).toBe(1082);
	expect(calcRequiredExp(24, 25, '1080')).toBe(1080);
});

test('candyExp', () => {
	expect(calcCandyExp('normal')).toBe(25);
	expect(calcCandyExp('down')).toBe(21);
	expect(calcCandyExp('up')).toBe(30);
	expect(calcBoostedCandyExp('normal')).toBe(50);
	expect(calcBoostedCandyExp('down')).toBe(42);
	expect(calcBoostedCandyExp('up')).toBe(60);
});

test('candy', () => {
	expect(calcRequiredCandy(24, 25, 'normal', '600')).toBe(24);
	expect(calcRequiredCandy(24, 25, 'normal', '900')).toBe(36);
	expect(calcRequiredCandy(24, 25, 'normal', '1080')).toBe(44);
	expect(calcRequiredCandy(24, 25, 'down', '600')).toBe(29);
	expect(calcRequiredCandy(24, 25, 'down', '900')).toBe(43);
	expect(calcRequiredCandy(24, 25, 'down', '1080')).toBe(52);
	expect(calcRequiredCandy(24, 25, 'up', '600')).toBe(20);
	expect(calcRequiredCandy(24, 25, 'up', '900')).toBe(30);
	expect(calcRequiredCandy(24, 25, 'up', '1080')).toBe(36);
	expect(calcRequiredCandy(55, 56, 'normal', '600')).toBe(92); // Kerusu カメ
	expect(calcRequiredCandy(55, 60, 'normal', '600')).toBe(508); // Twitter情報
	expect(calcRequiredBoostedCandy(24, 25, 'normal', '600')).toBe(12);
	expect(calcRequiredBoostedCandy(24, 25, 'normal', '900')).toBe(18);
	expect(calcRequiredBoostedCandy(24, 25, 'normal', '1080')).toBe(22);
	expect(calcRequiredBoostedCandy(24, 25, 'down', '600')).toBe(15);
	expect(calcRequiredBoostedCandy(24, 25, 'down', '900')).toBe(22);
	expect(calcRequiredBoostedCandy(24, 25, 'down', '1080')).toBe(26);
	expect(calcRequiredBoostedCandy(24, 25, 'up', '600')).toBe(10);
	expect(calcRequiredBoostedCandy(24, 25, 'up', '900')).toBe(15);
	expect(calcRequiredBoostedCandy(24, 25, 'up', '1080')).toBe(18);
});

test('dreamShards', () => {
	expect(calcRequiredDreamShards(24, 25, 'normal', '600')).toBe(2208);
	expect(calcRequiredDreamShards(25, 26, 'normal', '600')).toBe(2375);
	expect(calcRequiredDreamShards(20, 21, 'normal', '600')).toBe(1638);
	expect(calcRequiredDreamShards(20, 22, 'normal', '600')).toBe(3420);
	expect(calcRequiredDreamShards(20, 23, 'normal', '600')).toBe(5290);
	expect(calcRequiredDreamShards(55, 56, 'normal', '600')).toBe(35972); // kerusu カメ
	expect(calcRequiredDreamShards(55, 60, 'normal', '600')).toBe(250992) // Twiiter情報
	expect(calcRequiredBoostedDreamShards(24, 25, 'normal', '600')).toBe(5520); // ゆめのかけら消費量が6倍→5倍へ
	expect(calcRequiredMiniBoostedDreamShards(24, 25, 'normal', '600')).toBe(4416);
});
