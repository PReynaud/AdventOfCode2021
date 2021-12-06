import { calculateNumberOfFish, decreaseValuesAndAddNewFishes } from './part1';

describe('Day 6 - Part 1', () => {
  const exampleRaw = '3, 4, 3, 1, 2';
  it('should decrease all values by one day and return number of new fish', () => {
    const example = [3, 4, 3, 1, 2];
    let result = decreaseValuesAndAddNewFishes(example);
    expect(result).toEqual([2, 3, 2, 0, 1]);

    result = decreaseValuesAndAddNewFishes([2, 3, 2, 0, 1]);
    expect(result).toEqual([1, 2, 1, 6, 0, 8]);
  });

  it('should validate example', () => {
    expect(calculateNumberOfFish(exampleRaw, 18)).toEqual(26);
    expect(calculateNumberOfFish(exampleRaw, 80)).toEqual(5934);
  });
});
