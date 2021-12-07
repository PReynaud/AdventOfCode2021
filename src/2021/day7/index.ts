import { readFile } from './../../utils/file.utils';
import { shouldCalculateLessAmountOfFuelFromRaw } from './part1';
import { shouldCalculateLessAmountOfFuelFromRaw as shouldCalculateLessAmountOfFuelFromRaw2 } from './part2';

const inputPath = './src/2021/day7/input.txt';

export async function part1() {
  console.log('Start program day 7 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = shouldCalculateLessAmountOfFuelFromRaw(fromFile[0]);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 7 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = shouldCalculateLessAmountOfFuelFromRaw2(fromFile[0]);

  console.log('Result is :', result);
}
