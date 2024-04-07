import { calcRequiredExp } from './calc-required-exp';

test('check', () => {
	expect(calcRequiredExp(24, 25, '600', 'normal')).toBe(600);
	expect(calcRequiredExp(20, 21, '600', 'normal')).toBe(515);
	expect(calcRequiredExp(1, 2, '600', 'normal')).toBe(54);
	expect(calcRequiredExp(20, 22, '600', 'normal')).toBe(1052);
	expect(calcRequiredExp(19, 21, '600', 'normal')).toBe(1012);
	expect(calcRequiredExp(20, 23, '600', 'normal')).toBe(1610);
	expect(calcRequiredExp(19, 22, '600', 'normal')).toBe(1549);
	expect(calcRequiredExp(20, 24, '600', 'normal')).toBe(2189);
	expect(calcRequiredExp(12, 13, '900', 'normal')).toBe(610);
	expect(calcRequiredExp(2, 3, '900', 'normal')).toBe(107);
	expect(calcRequiredExp(10, 11, '900', 'normal')).toBe(518);
});
