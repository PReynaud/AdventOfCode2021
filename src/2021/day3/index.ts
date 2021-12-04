import { readFile } from './../../utils/file.utils';
import { calculatePowerConsumption as calculatePowerConsumptionPart1 } from './part1';
import { calculatePowerConsumption as calculatePowerConsumptionPart2 } from './part2';

const inputPath = './src/2021/day3/input.txt';

export async function part1() {
  console.log('Start program day 3 - Part 1');

  const fromFile = await readFile(inputPath);
  const result = calculatePowerConsumptionPart1(fromFile);

  console.log('Result is :', result);
}

export async function part2() {
  console.log('Start program day 3 - Part 2');

  const fromFile = await readFile(inputPath);
  const result = calculatePowerConsumptionPart2(fromFile);

  console.log('Result is :', result);
}
