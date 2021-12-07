import { shouldCalculateLessAmountOfFuel } from './part1';

describe('Day 7 - Part1', () => {
  const example = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];
  it('should validate the example', () => {
    const result = shouldCalculateLessAmountOfFuel(example);
    expect(result).toEqual(37);
  });
});
