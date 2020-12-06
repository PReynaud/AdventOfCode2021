import { createRuleFromString, getRuleAndPasswordFromString } from './common';
import {
  isPasswordValid as isPasswordValidPart1,
  numberOfCharacter,
} from './part1';
import {
  isPasswordValid as isPasswordValidPart2,
  checkBothPositions,
  checkPosition,
} from './part2';

describe('Day 2 - Common', () => {
  it('should create a rule from a string', () => {
    expect(createRuleFromString('1-3 a')).toEqual({
      min: 1,
      max: 3,
      character: 'a',
    });
    expect(createRuleFromString('1-3 b')).toEqual({
      min: 1,
      max: 3,
      character: 'b',
    });
    expect(createRuleFromString('2-9 c')).toEqual({
      min: 2,
      max: 9,
      character: 'c',
    });
    expect(createRuleFromString('10-15 d')).toEqual({
      min: 10,
      max: 15,
      character: 'd',
    });
  });

  it('should create a rule and a password from a line', () => {
    expect(getRuleAndPasswordFromString('1-3 a: abcde')).toEqual({
      password: 'abcde',
      rule: { min: 1, max: 3, character: 'a' },
    });
    expect(getRuleAndPasswordFromString('1-3 b: cdefg')).toEqual({
      password: 'cdefg',
      rule: { min: 1, max: 3, character: 'b' },
    });
    expect(getRuleAndPasswordFromString('2-9 c: ccccccccc')).toEqual({
      password: 'ccccccccc',
      rule: { min: 2, max: 9, character: 'c' },
    });
  });
});

describe('Day 2 - Part 1', () => {
  it('should give the right number of character in a string', () => {
    expect(numberOfCharacter('', 'a')).toBe(0);
    expect(numberOfCharacter('a', 'a')).toBe(1);
    expect(numberOfCharacter('aa', 'a')).toBe(2);
    expect(numberOfCharacter('aba', 'a')).toBe(2);
    expect(numberOfCharacter('bab', 'a')).toBe(1);
    expect(numberOfCharacter('bbb', 'a')).toBe(0);
  });

  it('should be a valid password', () => {
    expect(
      isPasswordValidPart1({
        password: 'abcde',
        rule: { min: 1, max: 3, character: 'a' },
      })
    ).toBeTruthy();
    expect(
      isPasswordValidPart1({
        password: 'ccccccccc',
        rule: { min: 2, max: 9, character: 'c' },
      })
    ).toBeTruthy();
  });

  it('should not be a valid password', () => {
    expect(
      isPasswordValidPart1({
        password: 'cdefg',
        rule: { min: 1, max: 3, character: 'b' },
      })
    ).toBeFalsy();
  });
});

describe('Day 2 - Part 2', () => {
  it('should check the validity of a position', () => {
    expect(checkPosition('test', 't', 1)).toBeTruthy();
    expect(checkPosition('test', 't', 4)).toBeTruthy();
    expect(checkPosition('test', 'e', 2)).toBeTruthy();
    expect(checkPosition('test', 'e', 1)).toBeFalsy();
    expect(checkPosition('test', 's', 1)).toBeFalsy();
    expect(checkPosition('test', 't', 2)).toBeFalsy();
  });

  it('should check the validity of both positions', () => {
    expect(checkBothPositions('test', 't', 1, 2)).toBeTruthy();
    expect(checkBothPositions('test', 't', 3, 4)).toBeTruthy();
    expect(checkBothPositions('test', 'e', 1, 2)).toBeTruthy();
    expect(checkBothPositions('test', 'e', 1, 3)).toBeFalsy();
    expect(checkBothPositions('test', 's', 1, 4)).toBeFalsy();
    expect(checkBothPositions('test', 't', 1, 4)).toBeFalsy();
  });

  it('should be a valid password', () => {
    expect(
      isPasswordValidPart2({
        password: 'abcde',
        rule: { min: 1, max: 3, character: 'a' },
      })
    ).toBeTruthy();
  });

  it('should not be a valid password', () => {
    expect(
      isPasswordValidPart2({
        password: 'cdefg',
        rule: { min: 1, max: 3, character: 'b' },
      })
    ).toBeFalsy();
    expect(
      isPasswordValidPart2({
        password: 'ccccccccc',
        rule: { min: 2, max: 9, character: 'c' },
      })
    ).toBeFalsy();
  });
});
