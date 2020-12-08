import { readFile } from '../../utils/file.utils';

interface CodeDescription {
  rows: string[];
  columns: string[];
}

interface Interval {
  min: number;
  max: number;
}

export function cutInHalf(interval: Interval, currentSymbol: string): Interval {
  const difference: number = interval.max - interval.min;

  if (currentSymbol === 'F' || currentSymbol === 'L') {
    return {
      min: interval.min,
      max: interval.min + Math.floor(difference / 2),
    };
  } else {
    return {
      min: interval.min + Math.ceil(difference / 2),
      max: interval.max,
    };
  }
}

function scanCode(code: string): CodeDescription {
  const splittedCode: string[] = code.split('');
  return {
    rows: splittedCode.slice(0, 7),
    columns: splittedCode.slice(7, 10),
  };
}

export function getSeatIdFromCode(code: string): number {
  const codeDescription = scanCode(code);
  let initialRowInterval = { min: 0, max: 127 };
  let initialColumnInterval = { min: 0, max: 7 };

  codeDescription.rows.forEach((row) => {
    initialRowInterval = cutInHalf(initialRowInterval, row);
  });
  codeDescription.columns.forEach((column) => {
    initialColumnInterval = cutInHalf(initialColumnInterval, column);
  });

  return initialRowInterval.min * 8 + initialColumnInterval.min;
}

export function getHighestSeatIdFromCodes(codes: string[]): number {
  let highestFound = 0;
  codes.forEach((code) => {
    const result = getSeatIdFromCode(code);
    console.log(result);
    if (result > highestFound) {
      highestFound = result;
    }
  });
  return highestFound;
}

export function getAllSeatIdFromCodes(codes: string[]): number[] {
  const result: number[] = [];
  codes.forEach((code) => {
    result.push(getSeatIdFromCode(code));
  });
  return result.sort((a, b) => a - b);
}

export function differenceWithPrevious(currentValue: number) {}

export async function part1() {
  console.log('Start program day 5 - Part 1');

  const allCodes: string[] = await readFile('./src/2020/day5/input.txt');
  const result = getHighestSeatIdFromCodes(allCodes);

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 5 - Part 2');

  const allCodes: string[] = await readFile('./src/2020/day5/input.txt');
  const allSeatId = getAllSeatIdFromCodes(allCodes);

  let currentValue = allSeatId[0] - 1;
  let foundValue: number = 0;
  allSeatId.some((seatId) => {
    if (seatId - currentValue > 1) {
      foundValue = currentValue;
      return true;
    } else {
      currentValue = seatId;
      return false;
    }
  });

  console.log('The result is: ', foundValue + 1);
}
