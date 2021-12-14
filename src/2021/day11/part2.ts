import { Grid, runOneStep, transformRawValuesToGrid } from './part1';

function isEverybodyFlashing(grid: Grid): boolean {
  return grid
    .flat()
    .flat()
    .every((oneCase) => oneCase.value === 0);
}

export function findWhenEverybodyFlash(rawValues: string[]): number {
  const grid = transformRawValuesToGrid(rawValues);

  let count = 0;
  do {
    runOneStep(grid);
    count++;
  } while (!isEverybodyFlashing(grid));

  return count;
}
