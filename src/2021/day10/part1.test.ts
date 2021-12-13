import {
  countIncorrectLines,
  selectIncorrectLines,
  simplifyAndFind,
  simplifyLine,
} from './part1';

describe('Day 10 - Part 1', () => {
  const rawValues = [
    '[({(<(())[]>[[{[]{<()<>>',
    '[(()[<>])]({[<{<<[]>>(',
    '{([(<{}[<>[]}>{[]{[(<()>',
    '(((({<>}<{<{<>}{[]{[]{}',
    '[[<[([]))<([[{}[[()]]]',
    '[{[{({}]{}}([{[{{{}}([]',
    '{<[[]]>}<{[{[{[]{()[[[]',
    '[<(<(<(<{}))><([]([]()',
    '<{([([[(<>()){}]>(<<{{',
    '<{([{{}}[<[[[<>{}]]]>[]]',
  ];
  it('should simplify line', () => {
    expect(simplifyLine('[({(<(())[]>[[{[]{<()<>>')).toEqual('[({([[{{');
    expect(simplifyLine('{([(<{}[<>[]}>{[]{[(<()>')).toEqual('{([(<[}>{{[(');
  });

  it('should find wrong character', () => {
    expect(simplifyAndFind('{([(<{}[<>[]}>{[]{[(<()>')).toEqual('}');
    expect(simplifyAndFind('[[<[([]))<([[{}[[()]]]')).toEqual(')');
    expect(simplifyAndFind('[{[{({}]{}}([{[{{{}}([]')).toEqual(']');
    expect(simplifyAndFind('[<(<(<(<{}))><([]([]()')).toEqual(')');
    expect(simplifyAndFind('<{([([[(<>()){}]>(<<{{')).toEqual('>');
  });

  it('should filter incorrect lines', () => {
    const result = selectIncorrectLines(rawValues);
    expect(result).toHaveLength(5);
    expect(result).toEqual([
      '{([(<{}[<>[]}>{[]{[(<()>',
      '[[<[([]))<([[{}[[()]]]',
      '[{[{({}]{}}([{[{{{}}([]',
      '[<(<(<(<{}))><([]([]()',
      '<{([([[(<>()){}]>(<<{{',
    ]);
  });

  it('should count total', () => {
    const result = countIncorrectLines(rawValues);
    expect(result).toEqual(26397);
  });
});
