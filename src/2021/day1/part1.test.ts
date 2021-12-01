import { isIncreasing } from './common';
import { countNumberOfIncrease } from './part1';

describe('Day 1 - Part 1', () => {
  it('should check if two numbers are increasing or not', () => {
    expect(isIncreasing(1, null)).toBe(false);
    expect(isIncreasing(null, 1)).toBe(false);

    expect(isIncreasing(1, 2)).toBe(true);
    expect(isIncreasing(1, 3)).toBe(true);

    expect(isIncreasing(3, 1)).toBe(false);
    expect(isIncreasing(1, 1)).toBe(false);
    expect(isIncreasing(1, -1)).toBe(false);
  });

  it('should validate the example', () => {
    const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(countNumberOfIncrease(example)).toEqual(7);
  });
});
