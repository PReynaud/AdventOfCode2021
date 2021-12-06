import { readFile } from './../../utils/file.utils';
import { calculateFromRawValues as calculateFromRawValuesPart1 } from './part1';
import { calculateFromRawValues as calculateFromRawValuesPart2 } from './part2';

const inputPath = './src/2021/day5/input.txt';

export async function part1() {
  console.log('Start program day 5 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = calculateFromRawValuesPart1(fromFile);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 5 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = calculateFromRawValuesPart2(fromFile);

  console.log('Result is :', result);
}
