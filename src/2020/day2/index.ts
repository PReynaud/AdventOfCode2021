import { readFile } from '../../utils/file.utils';
import { isLineValid as isLineValidForPart1 } from './part1';
import { isLineValid as isLineValidForPart2 } from './part2';

export async function part1() {
  console.log('Start program day 2 - Part 1');

  const values: string[] = await readFile('./src/2020/day2/input.txt');
  const result = values.filter((v) => isLineValidForPart1(v)).length;

  console.log(`Result is: ${result}`);
}

export async function part2() {
  console.log('Start program day 2 - Part 2');

  const values: string[] = await readFile('./src/2020/day2/input.txt');
  const result = values.filter((v) => isLineValidForPart2(v)).length;

  console.log(`Result is: ${result}`);
}
