import { readFile } from '../../utils/file.utils';

function parseListOfNumbers(list: string[]): number[] {
  return list.map((item) => Number(item.trim()));
}

function checkCurrentValueWithPrevious(
  numberList: number[],
  index: number,
  numberOfValuesChecked: number
): boolean {
  const valueToCheck = numberList[index];

  const firstIndex = index - numberOfValuesChecked;
  const previousValues: number[] = numberList.slice(firstIndex, index);

  return previousValues.some((currentFirstValue: number) => {
    const remainingValues = previousValues.filter(
      (v) => v !== currentFirstValue
    );
    return remainingValues.some((currentSecondValue: number) => {
      return currentFirstValue + currentSecondValue === valueToCheck;
    });
  });
}

function findFailingValue(
  numberList: number[],
  numberOfValuesChecked: number
): number {
  let currentCheckedIndex: number = numberOfValuesChecked;
  while (
    checkCurrentValueWithPrevious(
      numberList,
      currentCheckedIndex,
      numberOfValuesChecked
    )
  ) {
    currentCheckedIndex++;
  }
  return currentCheckedIndex;
}

function findRangeNumber(
  numberList: number[],
  searchValue: number,
  firstIndex: number
): number[] {
  const searchValueIndex: number = numberList.find((v) => v === searchValue)!;
  let currentIndex = firstIndex;
  let accumulator = 0;
  while (accumulator < searchValue && currentIndex <= searchValueIndex) {
    accumulator += numberList[currentIndex];
    currentIndex++;
  }

  if (accumulator === searchValue) {
    return [firstIndex, currentIndex];
  }
  return [];
}

function testMultipleRanges(
  numberList: number[],
  searchValue: number
): number[] {
  let result: number[] = [];
  let currentFirstIndex = 0;
  while (result.length === 0) {
    result = findRangeNumber(numberList, searchValue, currentFirstIndex);
    currentFirstIndex++;
  }

  return result;
}

function findMinMaxInRange(numberList: number[]) {
  let min = numberList[0],
    max = 0;
  numberList.forEach((num) => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });
  return { min, max };
}

export async function part1() {
  console.log('Start program day 9 - Part 1');

  const list: string[] = await readFile('./src/2020/day9/input.txt');
  const allNumbers: number[] = parseListOfNumbers(list);
  const result = findFailingValue(allNumbers, 25);

  console.log('The result is: ', allNumbers[result]);
}

export async function part2() {
  console.log('Start program day 9 - Part 2');

  const list: string[] = await readFile('./src/2020/day9/input.txt');
  const allNumbers: number[] = parseListOfNumbers(list);
  const resultIndex = testMultipleRanges(allNumbers, 1504371145);
  const filteredArray = allNumbers.slice(resultIndex[0], resultIndex[1]);
  console.log('Filtered array', filteredArray);
  const result = findMinMaxInRange(filteredArray);

  console.log('The result is: ', result, result.min + result.max);
}
