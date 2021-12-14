interface Case {
  value: number;
  hasFlashed: boolean;
}

export type Grid = Case[][];

export function transformRawValuesToGrid(rawValues: string[]): Grid {
  return rawValues.map((oneRow) =>
    oneRow.split('').map((oneValue) => ({
      value: Number(oneValue),
      hasFlashed: false,
    }))
  );
}

interface Position {
  x: number;
  y: number;
}

export function findNeighbours(
  currentPosition: Position,
  xMax: number,
  yMax: number
): Position[] {
  const x = currentPosition.x;
  const y = currentPosition.y;

  return [
    { x: x - 1, y: y - 1 },
    { x: x - 1, y },
    { x: x - 1, y: y + 1 },
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x + 1, y: y - 1 },
    { x: x + 1, y },
    { x: x + 1, y: y + 1 },
  ].filter(
    (onePosition) =>
      onePosition.x >= 0 &&
      onePosition.y >= 0 &&
      onePosition.x < xMax &&
      onePosition.y < yMax
  );
}

function getCaseForPosition(grid: Grid, position: Position): Case {
  return grid[position.y][position.x];
}

function increaseValue(grid: Grid, currentPosition: Position): void {
  const currentCase = getCaseForPosition(grid, currentPosition);
  if (currentCase.value < 9 && !currentCase.hasFlashed) {
    currentCase.value++;
  } else if (currentCase.value === 9 && !currentCase.hasFlashed) {
    currentCase.value = 0;
    currentCase.hasFlashed = true;
    increaseNeighbours(grid, currentPosition);
  }
}

export function increaseNeighbours(
  grid: Grid,
  currentPosition: Position
): void {
  const neighbours = findNeighbours(
    currentPosition,
    grid[0].length,
    grid.length
  );
  neighbours.forEach((neighbour) => {
    increaseValue(grid, neighbour);
  });
}

function resetAndCount(grid: Grid): number {
  let result = 0;
  grid
    .flat()
    .flat()
    .forEach((oneCase) => {
      if (oneCase.value === 0) {
        oneCase.hasFlashed = false;
        result++;
      }
    });

  return result;
}

function displayGrid(grid: Grid): void {
  let result = '';
  for (let y = 0; y < grid.length; y++) {
    result += grid[y].map((oneValue) => oneValue.value).join('') + '\n';
  }
  console.log(result);
}

export function runOneStep(grid: Grid): number {
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      increaseValue(grid, { x, y });
    }
  }

  return resetAndCount(grid);
}

export function runSteps(rawValues: string[], numberOfSteps: number): number {
  const grid = transformRawValuesToGrid(rawValues);
  let numberOfFlashes = 0;
  for (let count = 0; count < numberOfSteps; count++) {
    numberOfFlashes += runOneStep(grid);
  }
  return numberOfFlashes;
}
