import {
  createEmptyGrid,
  displayGrid,
  extractLineInformations,
} from './common';
import {
  calculateFromRawValues,
  drawAllLines,
  drawDiagonalLine,
} from './part2';

describe('Day 5 - Part 2', () => {
  const exampleRaw = [
    '0,9 -> 5,9',
    '8,0 -> 0,8',
    '9,4 -> 3,4',
    '2,2 -> 2,1',
    '7,0 -> 7,4',
    '6,4 -> 2,0',
    '0,9 -> 2,9',
    '3,4 -> 1,4',
    '0,0 -> 8,8',
    '5,5 -> 8,2',
  ];

  it('should draw diagonal line', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);
    drawDiagonalLine(grid, { x1: 1, y1: 1, x2: 3, y2: 3 });
    expect(displayGrid(grid)).toMatchSnapshot();

    drawDiagonalLine(grid, { x1: 8, y1: 7, x2: 6, y2: 5 });
    expect(displayGrid(grid)).toMatchSnapshot();

    drawDiagonalLine(grid, { x1: 1, y1: 8, x2: 0, y2: 9 });
    expect(displayGrid(grid)).toMatchSnapshot();
  });

  it('should draw all lines of the example', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);
    drawAllLines(grid, extracted);

    expect(displayGrid(grid)).toMatchSnapshot();
  });

  it('should validate example', () => {
    const result = calculateFromRawValues(exampleRaw);
    expect(result).toEqual(12);
  });
});
