import {
  getNextXAxisPosition,
  getNextPosition,
  Movement,
  getFinalResult,
  isBeyondBottomLimit,
} from '.';

describe('Day 3', () => {
  it('should calculate next position', () => {
    expect(getNextXAxisPosition(0, 1, 5)).toBe(1);
    expect(getNextXAxisPosition(0, 2, 5)).toBe(2);
    expect(getNextXAxisPosition(0, 4, 5)).toBe(4);
    expect(getNextXAxisPosition(0, 5, 5)).toBe(0);
    expect(getNextXAxisPosition(1, 5, 5)).toBe(1);
    expect(getNextXAxisPosition(2, 5, 5)).toBe(2);
    expect(getNextXAxisPosition(4, 5, 5)).toBe(4);
    expect(getNextXAxisPosition(4, 1, 5)).toBe(0);

  });

  const testMap = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  it('should return the next position', () => {
    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 5, toBottom: 2 })
    ).toEqual({ x: 5, y: 2 });

    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 16, toBottom: 2 })
    ).toEqual({ x: 5, y: 2 });

    expect(
      getNextPosition(testMap, { x: 0, y: 0 }, { toRight: 5, toBottom: 7 })
    ).toEqual({ x: 5, y: 7 });
  });

  it('should indicate if the bottom has been reached', () => {
    expect(
      isBeyondBottomLimit(testMap, { x: 0, y: 0 })
    ).toBeFalsy();
    expect(
      isBeyondBottomLimit(testMap, { x: 0, y: 12 })
    ).toBeTruthy();
    expect(
      isBeyondBottomLimit(testMap, { x: 5, y: 10 })
    ).toBeFalsy();
    expect(
      isBeyondBottomLimit(testMap, { x: 5, y: 11 })
    ).toBeTruthy();
  });

  it('should calculate the right result from a simple map', () => {
    let initialPosition = { x: 0, y: 0 };
    const movement: Movement = {
      toRight: 3,
      toBottom: 1,
    };
    expect(getFinalResult(testMap, movement)).toEqual(7);
  })
});
