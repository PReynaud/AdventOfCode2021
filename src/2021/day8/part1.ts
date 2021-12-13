import { extractSecondPartValuesFromRaw } from './common';

export function countNumberOfAppearances(rawValues: string[]): number {
  const values = extractSecondPartValuesFromRaw(rawValues);

  const allowedLengthValues = [2, 3, 4, 7];
  const result = values
    .flat()
    .flat()
    .filter((value) => allowedLengthValues.includes(value.length)).length;

  return result;
}
