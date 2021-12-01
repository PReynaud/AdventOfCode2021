import { readFile } from './../../utils/file.utils';
import { countNumberOfIncrease as countNumberOfIncreasePart1 } from './part1';
import { countNumberOfIncrease as countNumberOfIncreasePart2 } from './part2';

export async function part1() {
  console.log('Start program day 1');

  const fromFile = await readFile('./src/2021/day1/input.txt');
  const depthList = fromFile.map((oneLine) => Number(oneLine));

  console.log('Result is :', countNumberOfIncreasePart1(depthList));
}

export async function part2() {
  console.log('coucou');

  const fromFile = await readFile('./src/2021/day1/input.txt');
  const depthList = fromFile.map((oneLine) => Number(oneLine));

  console.log('Result is :', countNumberOfIncreasePart2(depthList));
}
