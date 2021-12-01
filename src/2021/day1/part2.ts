import { isIncreasing, isInvalid } from './common';

export function sumOfThreeConsecutivesValues(values: number[]): number[] {
  const result: number[] = [];
  const maxIndex = values.length - 2;
  for (let i = 0; i < maxIndex; i++) {
    result.push(values[i] + values[i + 1] + values[i + 2]);
  }
  return result;
}

export function countNumberOfIncrease(values: number[]): number {
  let result = 0;
  const sumOfThreeValues = sumOfThreeConsecutivesValues(values);

  sumOfThreeValues.forEach((element, index) => {
    if (index > 0) {
      if (isIncreasing(sumOfThreeValues[index - 1], sumOfThreeValues[index])) {
        result++;
      }
    }
  });

  return result;
}
