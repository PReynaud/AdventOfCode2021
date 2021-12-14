import { findNeighbours, runSteps } from './part1';

describe('Day 11 - Part 1', () => {
  it('should find neighbours', () => {
    expect(findNeighbours({ x: 0, y: 0 }, 10, 10)).toHaveLength(3);
    expect(findNeighbours({ x: 0, y: 1 }, 10, 10)).toHaveLength(5);
    expect(findNeighbours({ x: 5, y: 5 }, 10, 10)).toHaveLength(8);
    expect(findNeighbours({ x: 9, y: 0 }, 10, 10)).toHaveLength(3);
    expect(findNeighbours({ x: 9, y: 9 }, 10, 10)).toHaveLength(3);
  });

  it('should do one step', () => {
    const example = [
      '5483143223',
      '2745854711',
      '5264556173',
      '6141336146',
      '6357385478',
      '4167524645',
      '2176841721',
      '6882881134',
      '4846848554',
      '5283751526',
    ];
    const result = runSteps(example, 1);
    expect(result).toEqual(0);
  });

  it('should do two steps', () => {
    const example = [
      '5483143223',
      '2745854711',
      '5264556173',
      '6141336146',
      '6357385478',
      '4167524645',
      '2176841721',
      '6882881134',
      '4846848554',
      '5283751526',
    ];
    const result = runSteps(example, 2);
    expect(result).toEqual(35);
  });

  it('should validate example', () => {
    const example = [
      '5483143223',
      '2745854711',
      '5264556173',
      '6141336146',
      '6357385478',
      '4167524645',
      '2176841721',
      '6882881134',
      '4846848554',
      '5283751526',
    ];
    const result = runSteps(example, 10);
    expect(result).toEqual(204);
  });

  it('should validate full example', () => {
    const example = [
      '5483143223',
      '2745854711',
      '5264556173',
      '6141336146',
      '6357385478',
      '4167524645',
      '2176841721',
      '6882881134',
      '4846848554',
      '5283751526',
    ];
    const result = runSteps(example, 100);
    expect(result).toEqual(1656);
  });
});
