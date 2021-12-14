import { findWhenEverybodyFlash } from './part2';

describe('Day 11 - Part 2', () => {
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
    const result = findWhenEverybodyFlash(example);
    expect(result).toEqual(195);
  });
});
