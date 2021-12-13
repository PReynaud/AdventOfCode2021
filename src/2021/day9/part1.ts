export function extractValuesFromRaw(rawValues: string[]): number[][] {
  return rawValues.map((oneRaw: string) =>
    oneRaw.split('').map((oneValue) => Number(oneValue))
  );
}

// lol, sooooo ugly but flemme
export function findListOfNeightbourValues(
  grid: number[][],
  x: number,
  y: number
): number[] {
  const xMax = grid[0].length - 1;
  const yMax = grid.length - 1;
  if (x === 0) {
    if (y === 0) {
      return [grid[1][0], grid[0][1]];
    } else if (y === yMax) {
      return [grid[yMax - 1][0], grid[yMax][1]];
    } else {
      return [grid[y - 1][x], grid[y + 1][x], grid[y][1]];
    }
  } else if (x === xMax) {
    if (y === 0) {
      return [grid[1][xMax], grid[0][xMax - 1]];
    } else if (y === yMax) {
      return [grid[yMax - 1][xMax], grid[yMax][xMax - 1]];
    }
    return [grid[y - 1][x], grid[y + 1][x], grid[y][xMax - 1]];
  } else if (y === 0) {
    return [grid[0][x - 1], grid[0][x + 1], grid[1][x]];
  } else if (y === yMax) {
    return [grid[yMax][x - 1], grid[yMax][x + 1], grid[yMax - 1][x]];
  }
  return [grid[y - 1][x], grid[y][x - 1], grid[y + 1][x], grid[y][x + 1]];
}

export function compareValueToNeighbours(
  value: number,
  neightbours: number[]
): boolean {
  return value < 9 && Math.min(value, ...neightbours) === value;
}

export function findLowPoints(grid: number[][]): number[] {
  const result: number[] = [];
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      const currentValue = grid[y][x];
      if (
        compareValueToNeighbours(
          currentValue,
          findListOfNeightbourValues(grid, x, y)
        )
      ) {
        result.push(currentValue);
      }
    }
  }
  return result;
}

export function calculateRiskLevel(rawValues: string[]): number {
  const values = extractValuesFromRaw(rawValues);
  const lowPoints = findLowPoints(values);
  return lowPoints.reduce((acc, value) => acc + value + 1, 0);
}
