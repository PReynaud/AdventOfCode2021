import { convertBinaryToNumber } from './common';

export function findMostCommonValueForIndex(
  values: string[],
  index: number
): '0' | '1' {
  let zeroValues = 0;
  let oneValues = 0;

  values.forEach((oneString) => {
    if (oneString[index] === '0') {
      zeroValues++;
    } else if (oneString[index] === '1') {
      oneValues++;
    }
  });

  return oneValues >= zeroValues ? '1' : '0';
}

export function findLeastCommonValueForIndex(
  values: string[],
  index: number
): '0' | '1' {
  let zeroValues = 0;
  let oneValues = 0;

  values.forEach((oneString) => {
    if (oneString[index] === '0') {
      zeroValues++;
    } else if (oneString[index] === '1') {
      oneValues++;
    }
  });

  return zeroValues <= oneValues ? '0' : '1';
}

export function selectWithValuesAtIndex(
  values: string[],
  value: '0' | '1',
  index: number
): string[] {
  return values.filter((oneValue) => oneValue[index] === value);
}

export function extractOxygenRate(values: string[]): string {
  let localValues = values;
  let currentIndex = 0;
  while (localValues.length > 1) {
    const mostCommonValue = findMostCommonValueForIndex(
      localValues,
      currentIndex
    );
    localValues = selectWithValuesAtIndex(
      localValues,
      mostCommonValue,
      currentIndex
    );
    currentIndex++;
  }
  return localValues[0];
}

export function extractCo2Rate(values: string[]): string {
  let localValues = values;
  let currentIndex = 0;
  while (localValues.length > 1) {
    const mostCommonValue = findLeastCommonValueForIndex(
      localValues,
      currentIndex
    );
    localValues = selectWithValuesAtIndex(
      localValues,
      mostCommonValue,
      currentIndex
    );
    currentIndex++;
  }
  return localValues[0];
}

export function extractRates(values: string[]): [string, string] {
  const oxygenGeneratorRating = extractOxygenRate(values);
  const co2Rating = extractCo2Rate(values);
  return [oxygenGeneratorRating, co2Rating];
}

export function calculatePowerConsumption(values: string[]): number {
  const [oxygenGeneratorRating, co2Rating] = extractRates(values);
  return (
    convertBinaryToNumber(oxygenGeneratorRating) *
    convertBinaryToNumber(co2Rating)
  );
}
