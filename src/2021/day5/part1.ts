import {
  calculateOverlapping,
  createEmptyGrid,
  drawStraightLine,
  extractLineInformations,
  Grid,
  isStraightLine,
  Line,
} from './common';

export function drawAllLines(grid: Grid, lines: Line[]): void {
  lines
    .filter((oneLine) => isStraightLine(oneLine))
    .forEach((oneLine) => {
      drawStraightLine(grid, oneLine);
    });
}

export function calculateFromRawValues(rawValues: string[]): number {
  const extracted = extractLineInformations(rawValues);
  const grid = createEmptyGrid(extracted);
  drawAllLines(grid, extracted);
  return calculateOverlapping(grid);
}
