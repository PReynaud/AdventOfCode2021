import { extractValuesFromRaw } from './part1';
import { calculateRiskLevel, findBasinSize, transformGrid } from './part2';

describe('Day 9 - Part 2', () => {
  const example = [
    '2199943210',
    '3987894921',
    '9856789892',
    '8767896789',
    '9899965678',
  ];

  it('should find basin for low point', () => {
    const values = extractValuesFromRaw(example);
    const grid = transformGrid(values);

    expect(findBasinSize(grid, { x: 1, y: 0 })).toEqual(3);
    expect(findBasinSize(grid, { x: 9, y: 0 })).toEqual(9);
    expect(findBasinSize(grid, { x: 2, y: 2 })).toEqual(14);
    expect(findBasinSize(grid, { x: 6, y: 4 })).toEqual(9);
  });

  it('should validate example', () => {
    expect(calculateRiskLevel(example)).toEqual(1134);
  });
});
