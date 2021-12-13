import { readFile } from './../../utils/file.utils';
import { countNumberOfAppearances as fromPart1 } from './part1';
import { countNumberOfAppearances as fromPart2 } from './part2';

const inputPath = './src/2021/day8/input.txt';

export async function part1() {
  console.log('Start program day 8 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = fromPart1(fromFile);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 8 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = fromPart2(fromFile);

  console.log('Result is :', result);
}
