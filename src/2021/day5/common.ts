export interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function extractFromOneSide(rawSide: string): [number, number] {
  const [x, y] = rawSide
    .trim()
    .split(',')
    .map((value) => Number(value));
  return [x, y];
}

export function extractOneLine(rawValue: string): Line {
  const [left, right] = rawValue.split('->');
  const [x1, y1] = extractFromOneSide(left);
  const [x2, y2] = extractFromOneSide(right);
  return {
    x1,
    y1,
    x2,
    y2,
  };
}

export function extractLineInformations(rawValues: string[]): Line[] {
  return rawValues.map(extractOneLine);
}

function isHorizontalStraightLine(oneLine: Line): boolean {
  return oneLine.y1 === oneLine.y2;
}

function isVerticalStraightLine(oneLine: Line): boolean {
  return oneLine.x1 === oneLine.x2;
}

export function isStraightLine(oneLine: Line): boolean {
  return isHorizontalStraightLine(oneLine) || isVerticalStraightLine(oneLine);
}

function findMaxXValue(allLines: Line[]): number {
  return Math.max(
    ...allLines.map((oneLine) => Math.max(oneLine.x1, oneLine.x2))
  );
}

function findMaxYValue(allLines: Line[]): number {
  return Math.max(
    ...allLines.map((oneLine) => Math.max(oneLine.y1, oneLine.y2))
  );
}

export type Grid = number[][];

export function createEmptyGrid(allLines: Line[]): Grid {
  const xMax = findMaxXValue(allLines);
  const yMax = findMaxYValue(allLines);

  const result: number[][] = [];
  for (let i = 0; i <= yMax; i++) {
    result.push(Array(xMax + 1).fill(0));
  }

  return result;
}

export function drawStraightLine(grid: Grid, line: Line): void {
  if (isHorizontalStraightLine(line)) {
    const minIndex = Math.min(line.x1, line.x2);
    const maxIndex = Math.max(line.x1, line.x2);
    for (let i = minIndex; i <= maxIndex; i++) {
      grid[line.y1][i]++;
    }
  } else if (isVerticalStraightLine(line)) {
    const minIndex = Math.min(line.y1, line.y2);
    const maxIndex = Math.max(line.y1, line.y2);
    for (let i = minIndex; i <= maxIndex; i++) {
      grid[i][line.x1]++;
    }
  }
}

export function calculateOverlapping(grid: Grid): number {
  return grid
    .flat()
    .flat()
    .filter((value) => value >= 2).length;
}

export function displayGrid(grid: Grid): string {
  let result = '';
  grid.forEach((oneLine) => {
    result += oneLine.join(' ');
    result += '\n';
  });
  return result;
}
