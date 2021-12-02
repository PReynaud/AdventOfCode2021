import { readFile } from './../../utils/file.utils';
import { calculateFromRawInstructions as calculatePart1 } from './part1';
import { calculateFromRawInstructions as calculatePart2 } from './part2';

const inputPath = './src/2021/day2/input.txt';

export async function part1() {
  console.log('Start program day 2 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = calculatePart1(fromFile);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 2 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = calculatePart2(fromFile);

  console.log('Result is :', result);
}
