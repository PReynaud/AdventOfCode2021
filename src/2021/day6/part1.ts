import { extractValuesFromRaw } from './common';

export function decreaseValuesAndAddNewFishes(values: number[]): number[] {
  let numberOfNewFishes = 0;
  const newValues = values.map((oneValue) => {
    if (oneValue === 0) {
      numberOfNewFishes++;
      return 6;
    }
    return oneValue - 1;
  });
  return [...newValues, ...Array(numberOfNewFishes).fill(8)];
}

export function calculateNumberOfFish(
  rawValues: string,
  numberOfDays: number
): number {
  let values = extractValuesFromRaw(rawValues);
  for (let i = 0; i < numberOfDays; i++) {
    values = decreaseValuesAndAddNewFishes(values);
  }
  return values.length;
}
