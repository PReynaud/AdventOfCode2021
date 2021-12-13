import {
  calculateRiskLevel,
  extractValuesFromRaw,
  findListOfNeightbourValues,
  findLowPoints,
} from './part1';

describe('Day 9 - Part 1', () => {
  const example = [
    '2199943210',
    '3987894921',
    '9856789892',
    '8767896789',
    '9899965678',
  ];

  it('should extract values', () => {
    const result = extractValuesFromRaw(example);
    expect(result).toHaveLength(5);
    expect(result[0]).toEqual([2, 1, 9, 9, 9, 4, 3, 2, 1, 0]);
  });

  it('should find neighbour values', () => {
    const values = extractValuesFromRaw(example);
    expect(findListOfNeightbourValues(values, 0, 0).sort()).toEqual(
      [1, 3].sort()
    );
    expect(findListOfNeightbourValues(values, 1, 0).sort()).toEqual(
      [2, 9, 9].sort()
    );
    expect(findListOfNeightbourValues(values, 0, 1).sort()).toEqual(
      [2, 9, 9].sort()
    );
    expect(findListOfNeightbourValues(values, 1, 1).sort()).toEqual(
      [1, 8, 8, 3].sort()
    );
    expect(findListOfNeightbourValues(values, 0, 4).sort()).toEqual(
      [8, 8].sort()
    );
    expect(findListOfNeightbourValues(values, 9, 4).sort()).toEqual(
      [7, 9].sort()
    );
  });

  it('should find low points', () => {
    const values = extractValuesFromRaw(example);
    const result = findLowPoints(values);
    expect(result).toEqual([1, 5, 5, 0]);
  });

  it('should calculate result from example', () => {
    expect(calculateRiskLevel(example)).toEqual(15);
  });
});
