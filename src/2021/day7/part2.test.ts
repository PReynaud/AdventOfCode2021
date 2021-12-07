import { shouldCalculateLessAmountOfFuel, sumArithmeticSuit } from './part2';

describe('Day 7 - Part1', () => {
  const example = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

  it('should calculate the sum of the term', () => {
    expect(sumArithmeticSuit(3)).toEqual(6);
    expect(sumArithmeticSuit(100)).toEqual(5050);
  });

  it('should validate the example', () => {
    const result = shouldCalculateLessAmountOfFuel(example);
    expect(result).toEqual(168);
  });
});
