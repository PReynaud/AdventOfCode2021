import {
  compareValueToNeighbours,
  extractValuesFromRaw,
  findListOfNeightbourValues,
} from './part1';

interface Coordinates {
  x: number;
  y: number;
}

type Grid = number[][];

interface Case {
  value: number;
  marked: boolean;
}

type ComplexGrid = Case[][];

export function transformGrid(grid: Grid): ComplexGrid {
  return grid.map((oneRow) =>
    oneRow.map((oneValue) => ({
      value: oneValue,
      marked: false,
    }))
  );
}

function findListOfNeightbourCoordinates(
  grid: ComplexGrid,
  x: number,
  y: number
): Coordinates[] {
  const xMax = grid[0].length - 1;
  const yMax = grid.length - 1;
  return [
    { x, y: y - 1 },
    { x: x - 1, y },
    { x, y: y + 1 },
    { x: x + 1, y },
  ].filter(
    (value) =>
      value.x >= 0 && value.x <= xMax && value.y >= 0 && value.y <= yMax
  );
}

function getCaseFromCoordinates(grid: ComplexGrid, coord: Coordinates): Case {
  return grid[coord.y][coord.x];
}

function markLowPoint(grid: ComplexGrid, lowPoint: Coordinates): void {
  grid[lowPoint.y][lowPoint.x].marked = true;
}

export function findBasinSize(
  grid: ComplexGrid,
  lowPoint: Coordinates
): number {
  let result = 1;
  markLowPoint(grid, lowPoint);

  const neighbours = findListOfNeightbourCoordinates(
    grid,
    lowPoint.x,
    lowPoint.y
  );
  neighbours.forEach((neighbour) => {
    const neighbourCase = getCaseFromCoordinates(grid, neighbour);
    if (neighbourCase.value !== 9 && !neighbourCase.marked) {
      result += findBasinSize(grid, neighbour);
    }
  });

  return result;
}

export function findLowPointsCoordinates(grid: number[][]): Coordinates[] {
  const result: Coordinates[] = [];
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      const currentValue = grid[y][x];
      if (
        compareValueToNeighbours(
          currentValue,
          findListOfNeightbourValues(grid, x, y)
        )
      ) {
        result.push({ x, y });
      }
    }
  }
  return result;
}

export function calculateRiskLevel(rawValues: string[]): number {
  const values = extractValuesFromRaw(rawValues);
  const lowPoints = findLowPointsCoordinates(values);
  const grid = transformGrid(values);
  const basinSizeList = lowPoints.map((lowPoint) =>
    findBasinSize(grid, lowPoint)
  );

  return basinSizeList
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, value) => acc * value, 1);
}
