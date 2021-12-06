import {
  calculateOverlapping,
  createEmptyGrid,
  drawStraightLine,
  extractLineInformations,
  Grid,
  isStraightLine,
  Line,
} from './common';

function isDiagonalLine(line: Line): boolean {
  return Math.abs(line.x2 - line.x1) === Math.abs(line.y2 - line.y1);
}

export function drawDiagonalLine(grid: Grid, line: Line): void {
  const minXIndex = Math.min(line.x1, line.x2);
  const minYIndex = Math.min(line.y1, line.y2);
  const maxXIndex = Math.max(line.x1, line.x2);
  const maxYIndex = Math.max(line.y1, line.y2);

  const numberOfPoints = Math.abs(maxXIndex - minXIndex);

  for (let i = 0; i <= numberOfPoints; i++) {
    const newXIndex = line.x1 < line.x2 ? minXIndex + i : maxXIndex - i;
    const newYIndex = line.y1 < line.y2 ? minYIndex + i : maxYIndex - i;
    grid[newYIndex][newXIndex]++;
  }
}

export function drawAllLines(grid: Grid, lines: Line[]): void {
  lines
    .filter((oneLine) => isStraightLine(oneLine))
    .forEach((oneLine) => {
      drawStraightLine(grid, oneLine);
    });
  lines
    .filter((oneLine) => isDiagonalLine(oneLine))
    .forEach((oneLine) => {
      drawDiagonalLine(grid, oneLine);
    });
}

export function calculateFromRawValues(rawValues: string[]): number {
  const extracted = extractLineInformations(rawValues);
  const grid = createEmptyGrid(extracted);
  drawAllLines(grid, extracted);
  return calculateOverlapping(grid);
}
