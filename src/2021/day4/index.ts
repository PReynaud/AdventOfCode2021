import { readFile } from './../../utils/file.utils';
import { extractAndRun as extractAndRunPart1 } from './part1';
import { extractAndRun as extractAndRunPart2 } from './part2';

const inputPath = './src/2021/day4/input.txt';

export async function part1() {
  console.log('Start program day 4 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = extractAndRunPart1(fromFile);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 4 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = extractAndRunPart2(fromFile);

  console.log('Result is :', result);
}
