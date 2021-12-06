import {
  calculateOverlapping,
  createEmptyGrid,
  displayGrid,
  drawStraightLine,
  extractLineInformations,
  extractOneLine,
} from './common';
import { calculateFromRawValues, drawAllLines } from './part1';

describe('Day 5 - Part 1', () => {
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
  it('should correctly extract one line', () => {
    expect(extractOneLine('0,9 -> 5,9')).toEqual({
      x1: 0,
      y1: 9,
      x2: 5,
      y2: 9,
    });
    expect(extractOneLine('421,642 -> 91,312')).toEqual({
      x1: 421,
      y1: 642,
      x2: 91,
      y2: 312,
    });
  });

  it('should extract all lines', () => {
    const extracted = extractLineInformations(exampleRaw);
    expect(extracted).toHaveLength(10);
    expect(extracted[0]).toEqual({
      x1: 0,
      y1: 9,
      x2: 5,
      y2: 9,
    });
  });

  it('should create empty grid', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);
    expect(grid).toHaveLength(10);
    grid.forEach((oneRow) => {
      expect(oneRow).toHaveLength(10);
    });
    expect(grid).toMatchSnapshot();
  });

  it('should draw a line', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);

    let line = { x1: 0, y1: 9, x2: 5, y2: 9 };
    drawStraightLine(grid, line);
    expect(displayGrid(grid)).toMatchSnapshot();

    line = { x1: 0, y1: 4, x2: 6, y2: 4 };
    drawStraightLine(grid, line);
    expect(displayGrid(grid)).toMatchSnapshot();

    line = { x1: 0, y1: 4, x2: 0, y2: 6 };
    drawStraightLine(grid, line);
    expect(displayGrid(grid)).toMatchSnapshot();
  });

  it('should draw all lines', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);
    drawAllLines(grid, extracted);

    expect(displayGrid(grid)).toMatchSnapshot();
  });

  it('should calculate overlapping points', () => {
    const extracted = extractLineInformations(exampleRaw);
    const grid = createEmptyGrid(extracted);
    drawAllLines(grid, extracted);

    expect(calculateOverlapping(grid)).toEqual(5);
  });

  it('should validate example', () => {
    const result = calculateFromRawValues(exampleRaw);
    expect(result).toEqual(5);
  });
});
