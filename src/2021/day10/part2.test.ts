import {
  calculateMissingCharsForOneLine,
  countIncorrectLines,
  selectIncompleteLines,
} from './part2';

describe('Day 10 - Part 2', () => {
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

  it('should get incomplete lines', () => {
    expect(selectIncompleteLines(rawValues)).toEqual([
      '[({(<(())[]>[[{[]{<()<>>',
      '[(()[<>])]({[<{<<[]>>(',
      '(((({<>}<{<{<>}{[]{[]{}',
      '{<[[]]>}<{[{[{[]{()[[[]',
      '<{([{{}}[<[[[<>{}]]]>[]]',
    ]);
  });

  it('should find value for incomplete lines', () => {
    expect(calculateMissingCharsForOneLine('[({(<(())[]>[[{[]{<()<>>')).toEqual(
      288957
    );
    expect(calculateMissingCharsForOneLine('[(()[<>])]({[<{<<[]>>(')).toEqual(
      5566
    );
    expect(calculateMissingCharsForOneLine('(((({<>}<{<{<>}{[]{[]{}')).toEqual(
      1480781
    );
    expect(calculateMissingCharsForOneLine('{<[[]]>}<{[{[{[]{()[[[]')).toEqual(
      995444
    );
    expect(calculateMissingCharsForOneLine('<{([{{}}[<[[[<>{}]]]>[]]')).toEqual(
      294
    );
  });

  it('should count incorrect lines', () => {
    const result = countIncorrectLines(rawValues);
    expect(result).toEqual(288957);
  });
});
