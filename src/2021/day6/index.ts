import { readFile } from './../../utils/file.utils';
import { calculateNumberOfFish as calculateNumberOfFishPart1 } from './part1';
import { calculateNumberOfFish as calculateNumberOfFishPart2 } from './part2';

const inputPath = './src/2021/day6/input.txt';

export async function part1() {
  console.log('Start program day 6 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = calculateNumberOfFishPart1(fromFile[0], 80);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 6 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = calculateNumberOfFishPart2(fromFile[0], 256);

  console.log('Result is :', result);
}
