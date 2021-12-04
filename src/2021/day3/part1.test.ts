import { convertBinaryToNumber } from './common';
import {
  calculatePowerConsumption,
  extractGammaRate,
  extractRates,
  invertBites,
} from './part1';

describe('Day 3 - Part 1', () => {
  it('should extract gamma rate in binary', () => {
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
    const gammaRate = extractGammaRate(example);
    expect(gammaRate).toEqual('10110');
  });

  it('should return the inverted bites of a string', () => {
    const inverted = invertBites('10110');
    expect(inverted).toEqual('01001');
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
    const [gammaRate, espilonRate] = extractRates(example);
    expect(gammaRate).toEqual('10110');
    expect(espilonRate).toEqual('01001');
  });

  it('should convert binary to number', () => {
    expect(convertBinaryToNumber('10110')).toEqual(22);
    expect(convertBinaryToNumber('01001')).toEqual(9);
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
    expect(result).toEqual(198);
  });
});
