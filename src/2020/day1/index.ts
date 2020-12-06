import { readFile } from './../../utils/file.utils';

export async function run() {
  console.log('Start program day 1');

  const result = await readFile('./src/2020/day1/input.txt');
  const allValues: number[] = result.map((r) => Number(r));

  let firstValue = 0;
  let secondValue = 0;
  allValues.some((currentFirstValue: number) => {
    firstValue = currentFirstValue;
    return allValues.some((currentSecondValue: number) => {
      secondValue = currentSecondValue;
      return 2020 - (currentFirstValue + currentSecondValue) === 0;
    });
  });

  const answer = firstValue * secondValue;

  console.log({
    firstValue,
    secondValue,
    answer,
  });
}

export async function runPart2() {
  console.log('Start program day 1');

  const result = await readFile('./src/2020/day1/input.txt');
  const allValues: number[] = result.map((r) => Number(r));

  let firstValue = 0;
  let secondValue = 0;
  let thirdValue = 0;
  allValues.some((currentFirstValue: number) => {
    return allValues.some((currentSecondValue: number) => {
      return allValues.some((currentThirdValue: number) => {
        if (
          2020 -
            (currentFirstValue + currentSecondValue + currentThirdValue) ===
          0
        ) {
          firstValue = currentFirstValue;
          secondValue = currentSecondValue;
          thirdValue = currentThirdValue;
          return true;
        }
        return false;
      });
    });
  });

  const answer = firstValue * secondValue * thirdValue;

  console.log({
    firstValue,
    secondValue,
    thirdValue,
    answer,
  });
}
