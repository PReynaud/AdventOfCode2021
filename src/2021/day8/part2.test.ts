import {
  countNumberOfAppearances,
  findNumberFromCharacters,
  foundPatternFromValues,
  isMatchingPatterns,
  matchOneValueFromSegments,
  matchTwoValuesFromSegments,
  searchS1S7,
  searchS2,
  searchS3S4,
  searchS5S6,
  searchTwoValue,
  transformStringToNumber,
} from './part2';

describe('Day 8 - Part 2', () => {
  const example = [
    'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe',
    'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc',
    'fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg',
    'fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb',
    'aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea',
    'fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb',
    'dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe',
    'bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef',
    'egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb',
    'gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce',
  ];

  const pattern = {
    ab: 1,
    gcdfa: 2,
    fbcad: 3,
    eafb: 4,
    cdfbe: 5,
    cdfgeb: 6,
    dab: 7,
    acedgfb: 8,
    cefabd: 9,
    cagedb: 0,
  };

  it('should find segment 2', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = searchS2(encryptExample);
    expect(result).toEqual('d');
  });

  it('should find segments 3 and 4', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = searchS3S4(encryptExample);
    expect(result).toEqual('ab');
  });

  it('should find segments 1 and 7', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = searchS1S7(encryptExample);
    expect(result).toEqual('ef');
  });

  it('should find segments 5 and 6', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = searchS5S6(encryptExample);
    expect(result).toEqual('cg');
  });

  it('should matchOneValueFromSegments', () => {
    expect(matchOneValueFromSegments('gcdfa', 'ab')).toBe(true);
    expect(matchOneValueFromSegments('gcdfa', 'ef')).toBe(true);
    expect(matchOneValueFromSegments('gcdfa', 'gc')).toBe(false);
  });

  it('should matchTwoValueFromSegments', () => {
    expect(matchTwoValuesFromSegments('gcdfa', 'ab')).toBe(false);
    expect(matchTwoValuesFromSegments('gcdfa', 'ef')).toBe(false);
    expect(matchTwoValuesFromSegments('gcdfa', 'gc')).toBe(true);
  });

  it('should isMatchingPatterns', () => {
    expect(
      isMatchingPatterns('gcdfa', [
        { segment: 'd', match: 1 },
        { segment: 'ab', match: 1 },
        { segment: 'ef', match: 1 },
        { segment: 'gc', match: 2 },
      ])
    ).toBe(true);
    expect(
      isMatchingPatterns('gcdfa', [
        { segment: 'd', match: 1 },
        { segment: 'ab', match: 1 },
        { segment: 'ef', match: 2 },
        { segment: 'gc', match: 1 },
      ])
    ).toBe(false);
  });

  it('should find two value', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = searchTwoValue(encryptExample);
    expect(result).toEqual('gcdfa');
  });

  it('should find pattern from encrypted', () => {
    const encryptExample = [
      'acedgfb',
      'cdfbe',
      'gcdfa',
      'fbcad',
      'dab',
      'cefabd',
      'cdfgeb',
      'eafb',
      'cagedb',
      'ab',
    ];
    const result = foundPatternFromValues(encryptExample);
    expect(result).toEqual(pattern);
  });

  it('should find the corresponding pattern from characters', () => {
    expect(findNumberFromCharacters('cdfeb', pattern)).toEqual(5);
    expect(findNumberFromCharacters('fcadb', pattern)).toEqual(3);
    expect(findNumberFromCharacters('cdbaf', pattern)).toEqual(3);
  });

  it('should corectly transform string to numbers', () => {
    expect(
      transformStringToNumber(['cdfeb', 'fcadb', 'cdfeb', 'cdbaf'], pattern)
    ).toEqual(5353);
  });

  it('should validate example', () => {
    const result = countNumberOfAppearances(example);
    expect(result).toEqual(61229);
  });
});
