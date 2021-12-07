import { extractInformationsFromRaw } from './common';

export function shouldCalculateLessAmountOfFuelFromRaw(
  rawString: string
): number {
  const values = extractInformationsFromRaw(rawString);
  return shouldCalculateLessAmountOfFuel(values);
}

export function sumArithmeticSuit(n: number): number {
  return (n / 2) * (n + 1);
}

export function shouldCalculateLessAmountOfFuel(values: number[]): number {
  const maxValue = Math.max(...values) - Math.min(...values);

  let minFuelValue = 0;
  for (let i = 0; i < maxValue; i++) {
    const totalFuel = values.reduce(
      (acc, val) => (acc += sumArithmeticSuit(Math.abs(val - i))),
      0
    );

    if (totalFuel < minFuelValue || minFuelValue === 0) {
      minFuelValue = totalFuel;
    }
  }

  return minFuelValue;
}
