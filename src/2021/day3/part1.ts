import { convertBinaryToNumber } from './common';

export function extractGammaRate(values: string[]): string {
  if (values[0]) {
    const maxIndex = values[0].length;
    let result = '';
    for (let i = 0; i < maxIndex; i++) {
      let zeroValues = 0;
      let oneValues = 0;

      values.forEach((oneString) => {
        if (oneString[i] === '0') {
          zeroValues++;
        } else if (oneString[i] === '1') {
          oneValues++;
        }
      });

      result += zeroValues > oneValues ? '0' : '1';
    }
    return result;
  }
  return '';
}

export function invertBites(binaryString: string): string {
  let result = '';
  for (let i = 0; i < binaryString.length; i++) {
    result += binaryString[i] === '0' ? '1' : '0';
  }
  return result;
}

export function extractRates(values: string[]): [string, string] {
  const gammaRate = extractGammaRate(values);
  const epsilonRate = invertBites(gammaRate);
  return [gammaRate, epsilonRate];
}

export function calculatePowerConsumption(values: string[]): number {
  const [gammaRate, epsilonRate] = extractRates(values);
  return convertBinaryToNumber(gammaRate) * convertBinaryToNumber(epsilonRate);
}
