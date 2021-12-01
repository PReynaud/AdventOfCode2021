import { isIncreasing } from './common';

export function countNumberOfIncrease(values: number[]): number {
  let result = 0;

  values.forEach((element, index) => {
    if (index > 0) {
      if (isIncreasing(values[index - 1], values[index])) {
        result++;
      }
    }
  });

  return result;
}
