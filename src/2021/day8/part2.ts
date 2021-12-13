import { extractPartsValuesFromRaw } from './common';

type AllPatterns = Record<string, number>;

//   s2 _
// s1 |   | s3
//   s7 _
// s6 |   | s4
//   s5 _

function searchValueWithLength(
  values: string[],
  length: number
): string | null {
  const result = values.filter((value) => value.length === length);
  return result && result.length > 0 ? result[0] : null;
}

function removeCharactersFrom(value: string, characters: string): string {
  let result = value;
  characters.split('').forEach((character) => {
    result = result.replace(character, '');
  });
  return result;
}

export function searchS2(values: string[]): string | null {
  const searchOneValue = searchValueWithLength(values, 2);
  const searchSevenValue = searchValueWithLength(values, 3);

  if (searchOneValue && searchSevenValue) {
    return sortString(removeCharactersFrom(searchSevenValue, searchOneValue));
  }

  console.log('Not found - segment 2');
  return null;
}

export function searchS3S4(values: string[]): string | null {
  const searchOneValue = searchValueWithLength(values, 2);
  if (searchOneValue) {
    return sortString(searchOneValue);
  }

  console.log('Not found - segments 3 and 4');
  return null;
}

export function searchS1S7(values: string[]): string | null {
  const searchOneValue = searchValueWithLength(values, 2);
  const searchFourValue = searchValueWithLength(values, 4);

  if (searchOneValue && searchFourValue) {
    return sortString(removeCharactersFrom(searchFourValue, searchOneValue));
  }

  console.log('Not found - segments 1 and 7');
  return null;
}

export function searchS5S6(values: string[]): string | null {
  const searchEightValue = searchValueWithLength(values, 7);
  const searchFourValue = searchValueWithLength(values, 4);
  const searchSevenValue = searchValueWithLength(values, 3);

  if (searchEightValue && searchFourValue && searchSevenValue) {
    return sortString(
      removeCharactersFrom(
        removeCharactersFrom(searchEightValue, searchSevenValue),
        searchFourValue
      )
    );
  }

  console.log('Not found - segments 5 and 6');
  return null;
}

export function matchOneValueFromSegments(
  value: string,
  segments: string
): boolean {
  let result = 0;
  segments.split('').forEach((oneSegment) => {
    result +=
      value.split('').filter((oneChar) => oneChar === oneSegment).length > 0
        ? 1
        : 0;
  });
  return result === 1;
}

export function matchTwoValuesFromSegments(
  value: string,
  segments: string
): boolean {
  let result = 0;
  segments.split('').forEach((oneSegment) => {
    result +=
      value.split('').filter((oneChar) => oneChar === oneSegment).length > 0
        ? 1
        : 0;
  });
  return result === 2;
}

interface Pattern {
  segment: string;
  match: number;
}

export function isMatchingPatterns(
  value: string,
  patterns: Pattern[]
): boolean {
  return patterns.every((pattern) => {
    if (pattern.match === 1) {
      return matchOneValueFromSegments(value, pattern.segment);
    } else if (pattern.match === 2) {
      return matchTwoValuesFromSegments(value, pattern.segment);
    }
    return true;
  });
}

// Test function
export function searchTwoValue(values: string[]): string | null {
  const foundS2 = searchS2(values);
  const foundS3S4 = searchS3S4(values);
  const foundS1S7 = searchS1S7(values);
  const foundS5S6 = searchS5S6(values);
  if (foundS2 && foundS3S4 && foundS1S7 && foundS5S6) {
    const patternsForTwo: Pattern[] = [
      { segment: foundS2, match: 1 },
      { segment: foundS3S4, match: 1 },
      { segment: foundS1S7, match: 1 },
      { segment: foundS5S6, match: 2 },
    ];
    return (
      values.find((value) => isMatchingPatterns(value, patternsForTwo)) ?? null
    );
  }
  return null;
}

function generatePatternForValue(
  value: number,
  foundS2: string | null,
  foundS3S4: string | null,
  foundS1S7: string | null,
  foundS5S6: string | null
): Pattern[] {
  if (foundS2 && foundS3S4 && foundS1S7 && foundS5S6) {
    if (value === 2) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 1 },
        { segment: foundS1S7, match: 1 },
        { segment: foundS5S6, match: 2 },
      ];
    }
    if (value === 3) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 2 },
        { segment: foundS1S7, match: 1 },
        { segment: foundS5S6, match: 1 },
      ];
    }
    if (value === 5) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 1 },
        { segment: foundS1S7, match: 2 },
        { segment: foundS5S6, match: 1 },
      ];
    }
    if (value === 6) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 1 },
        { segment: foundS1S7, match: 2 },
        { segment: foundS5S6, match: 2 },
      ];
    }
    if (value === 9) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 2 },
        { segment: foundS1S7, match: 2 },
        { segment: foundS5S6, match: 1 },
      ];
    }
    if (value === 0) {
      return [
        { segment: foundS2, match: 1 },
        { segment: foundS3S4, match: 2 },
        { segment: foundS1S7, match: 1 },
        { segment: foundS5S6, match: 2 },
      ];
    }
  }
  return [];
}

function searchValueForPattern(
  values: string[],
  pattern: Pattern[]
): string | null {
  return values.find((value) => isMatchingPatterns(value, pattern)) ?? null;
}

// dirty
function invert(obj: any): any {
  return Object.entries(obj).reduce((acc, entry) => {
    const [key, value]: [any, any] = entry;
    acc[value] = Number(key);
    return acc;
  }, {} as any);
}

export function foundPatternFromValues(values: string[]): AllPatterns {
  const foundS2 = searchS2(values);
  const foundS3S4 = searchS3S4(values);
  const foundS1S7 = searchS1S7(values);
  const foundS5S6 = searchS5S6(values);

  const result = {
    0: searchValueForPattern(
      values,
      generatePatternForValue(0, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
    1: searchValueWithLength(values, 2),
    2: searchValueForPattern(
      values,
      generatePatternForValue(2, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
    3: searchValueForPattern(
      values,
      generatePatternForValue(3, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
    4: searchValueWithLength(values, 4),
    5: searchValueForPattern(
      values,
      generatePatternForValue(5, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
    6: searchValueForPattern(
      values,
      generatePatternForValue(6, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
    7: searchValueWithLength(values, 3),
    8: searchValueWithLength(values, 7),
    9: searchValueForPattern(
      values,
      generatePatternForValue(9, foundS2, foundS3S4, foundS1S7, foundS5S6)
    ),
  };

  return invert(result);
}

function sortString(value: string): string {
  return Array.from(value).sort().join('');
}

export function findNumberFromCharacters(
  characters: string,
  pattern: AllPatterns
): number | null {
  const sortedCharacters = sortString(characters);
  for (let onePattern in pattern) {
    if (sortString(onePattern) === sortedCharacters) {
      return pattern[onePattern as keyof typeof pattern];
    }
  }

  return null;
}

export function transformStringToNumber(
  value: string[],
  pattern: AllPatterns
): number {
  const valuesAsNumber = value.map((element) =>
    findNumberFromCharacters(element, pattern)
  );

  return (
    1000 * valuesAsNumber[0]! +
    100 * valuesAsNumber[1]! +
    10 * valuesAsNumber[2]! +
    valuesAsNumber[3]!
  );
}

export function countNumberOfAppearances(rawValues: string[]): number {
  const [part1, part2] = extractPartsValuesFromRaw(rawValues);

  const result = part2.reduce((acc, value, index) => {
    const pattern = foundPatternFromValues(part1[index]);
    return acc + transformStringToNumber(value, pattern);
  }, 0);

  return result;
}
