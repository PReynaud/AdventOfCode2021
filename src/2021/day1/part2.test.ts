import { countNumberOfIncrease, sumOfThreeConsecutivesValues } from './part2';

describe('Day 1 - Part 2', () => {
  it('should create group of three values', () => {
    const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(sumOfThreeConsecutivesValues(example)).toEqual([
      607, 618, 618, 617, 647, 716, 769, 792,
    ]);
  });

  it('should validate the example', () => {
    const example = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    expect(countNumberOfIncrease(example)).toEqual(5);
  });
});
