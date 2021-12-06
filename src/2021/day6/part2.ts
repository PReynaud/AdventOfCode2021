import { extractValuesFromRaw } from './common';

type NumberOfDaysAvailable =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8';
type NumberOfFishWithAge = Record<NumberOfDaysAvailable, number>;

export function initializeCountObject(
  initialValues: number[]
): NumberOfFishWithAge {
  const result = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
  };
  initialValues.forEach((oneValue) => {
    result[oneValue.toString() as NumberOfDaysAvailable]++;
  });
  return result;
}

export function decreaseValuesAndAddNewFishes(
  values: NumberOfFishWithAge
): NumberOfFishWithAge {
  const result = {
    '0': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
  };
  for (let i = 0; i < 8; i++) {
    result[i.toString() as NumberOfDaysAvailable] =
      values[(i + 1).toString() as NumberOfDaysAvailable];
  }

  result['6'] += values['0'];
  result['8'] += values['0'];

  return result;
}

export function calculateNumberOfFish(
  rawValues: string,
  numberOfDays: number
): number {
  let values = extractValuesFromRaw(rawValues);
  let countObject = initializeCountObject(values);
  for (let i = 0; i < numberOfDays; i++) {
    countObject = decreaseValuesAndAddNewFishes(countObject);
  }

  let result = 0;
  for (const oneNumberOfFish in countObject) {
    result += countObject[oneNumberOfFish as NumberOfDaysAvailable];
  }

  return result;
}
