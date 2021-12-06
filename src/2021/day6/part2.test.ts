import { extractValuesFromRaw } from './common';
import {
  calculateNumberOfFish,
  decreaseValuesAndAddNewFishes,
  initializeCountObject,
} from './part2';

describe('Day 6 - Part 2', () => {
  const exampleRaw = '3, 4, 3, 1, 2';

  it('should initialize fish count', () => {
    const values = extractValuesFromRaw(exampleRaw);
    const result = initializeCountObject(values);
    expect(result).toEqual({
      '0': 0,
      '1': 1,
      '2': 1,
      '3': 2,
      '4': 1,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
    });
  });

  it('should decrease all values by one day and return number of new fish', () => {
    const example = [3, 4, 3, 1, 2];
    const initializedObject = initializeCountObject(example);
    let result = decreaseValuesAndAddNewFishes(initializedObject);
    expect(result).toEqual({
      '0': 1,
      '1': 1,
      '2': 2,
      '3': 1,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
    });

    result = decreaseValuesAndAddNewFishes(result);
    expect(result).toEqual({
      '0': 1,
      '1': 2,
      '2': 1,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 1,
      '7': 0,
      '8': 1,
    });
  });

  it('should working with old values', () => {
    expect(calculateNumberOfFish(exampleRaw, 18)).toEqual(26);
    expect(calculateNumberOfFish(exampleRaw, 80)).toEqual(5934);
  });

  it('should validate example', () => {
    expect(calculateNumberOfFish(exampleRaw, 256)).toEqual(26984457539);
  });
});
