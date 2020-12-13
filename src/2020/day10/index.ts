import { readFile } from '../../utils/file.utils';

function parseList(list: string[]): number[] {
  return list.map((v) => Number(v.trim()));
}

function getRatingVoltage(sortedList: number[]): number {
  const lastJoltage = sortedList[sortedList.length - 1];
  return lastJoltage + 3;
}

function countNumbersOfDifferences(sortedList: number[]) {
  const result = [0, 0];
  sortedList.forEach((currentValue, index) => {
    const previousValue = sortedList[index - 1];
    console.log(currentValue, previousValue);
    const difference = currentValue - (previousValue || 0);
    if (difference === 1) {
      console.log('add one');
      result[0]++;
    } else if (difference === 3) {
      console.log('add three');
      result[1]++;
    }
  });
  return result;
}

function buildConsecutive(range: number[]) {
  let iterationCount = 0;
  let lastJolt = 0;
  const consecutiveJolts: any = {};

  range.forEach((jolt, index) => {
    const diffJolt = jolt - lastJolt;
    if (diffJolt === 1) {
      iterationCount += 1;
    } else {
      if (!consecutiveJolts[iterationCount]) {
        consecutiveJolts[iterationCount] = 1;
      } else {
        consecutiveJolts[iterationCount] += 1;
      }
      iterationCount = 0;
    }
    lastJolt = jolt;

    if (index === range.length - 1) {
      // also close out the last row
      if (consecutiveJolts[iterationCount] === undefined) {
        consecutiveJolts[iterationCount] = 1;
      } else {
        consecutiveJolts[iterationCount]++;
      }
    }
  });
  return consecutiveJolts;
}

function getPossibleCombos(count: number) {
  let response = [];
  let lastThreeResponses = [0, 0, 0];
  const minValue = 1;
  for (let i = 0; i <= count; i++) {
    let possible = lastThreeResponses.reduce((a, b) => a + b, 0);
    lastThreeResponses.shift();
    if (possible < minValue) {
      possible = minValue;
    }
    lastThreeResponses.push(possible);
    response[i] = possible;
  }
  return response;
}

export async function part1() {
  console.log('Start program day 10 - Part 1');

  const list: string[] = await readFile('./src/2020/day10/input.txt');
  const allNumbers = parseList(list);
  const sortedList = allNumbers.sort((a, b) => a - b);
  const ratingJoltage = getRatingVoltage(sortedList);
  const result = countNumbersOfDifferences([...sortedList, ratingJoltage]);

  console.log('The result is: ', result, result[0] * result[1]);
}

// Code and explanation for part 2 taken from here https://davidlozzi.com/2020/12/10/advent-of-code-day-10-check-back-in-629-days/
// Haven't figured everything out yet but i'll try to take some times for that later
export async function part2() {
  console.log('Start program day 10 - Part 2');

  const list: string[] = await readFile('./src/2020/day10/input.txt');
  const allNumbers = parseList(list);
  const sortedList = allNumbers.sort((a, b) => a - b);
  const consecutiveJolts = buildConsecutive(sortedList);

  console.log(consecutiveJolts);
  const joltGroupCnt = Object.keys(consecutiveJolts).length;
  let numPossibilities = getPossibleCombos(joltGroupCnt);
  console.log(numPossibilities);
  let total = 1;
  for (let i = 0; i < joltGroupCnt; i += 1) {
    total = total * numPossibilities[i] ** consecutiveJolts[i];
  }

  console.log('The result is: ', total);
}
