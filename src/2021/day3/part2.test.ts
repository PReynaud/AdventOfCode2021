import {
  calculatePowerConsumption,
  extractOxygenRate,
  extractRates,
  findLeastCommonValueForIndex,
  findMostCommonValueForIndex,
  selectWithValuesAtIndex,
} from './part2';

describe('Day 3 - Part 1', () => {
  it('should find the most common value for index', () => {
    const example = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
    ];
    expect(findMostCommonValueForIndex(example, 0)).toEqual('1');
    expect(findMostCommonValueForIndex(example, 1)).toEqual('0');
    expect(findMostCommonValueForIndex(example, 2)).toEqual('1');
    expect(findMostCommonValueForIndex(example, 3)).toEqual('1');
    expect(findMostCommonValueForIndex(example, 4)).toEqual('1');
  });

  it('should find the least common value for index', () => {
    const example = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
    ];
    expect(findLeastCommonValueForIndex(example, 0)).toEqual('0');
    expect(findLeastCommonValueForIndex(example, 1)).toEqual('1');
    expect(findLeastCommonValueForIndex(example, 2)).toEqual('0');
    expect(findLeastCommonValueForIndex(example, 3)).toEqual('0');
    expect(findLeastCommonValueForIndex(example, 4)).toEqual('0');
  });

  it('should select only right values', () => {
    const example = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const selectedValues = selectWithValuesAtIndex(example, '1', 0);
    expect(selectedValues).toEqual([
      '11110',
      '10110',
      '10111',
      '10101',
      '11100',
      '10000',
      '11001',
    ]);
  });

  it('should extract both rates in binary', () => {
    const example = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const [oxygenGeneratorRating, co2Rating] = extractRates(example);
    expect(oxygenGeneratorRating).toEqual('10111');
    expect(co2Rating).toEqual('01010');
  });

  it('should validate the example', () => {
    const example = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];
    const result = calculatePowerConsumption(example);
    expect(result).toEqual(230);
  });
});
