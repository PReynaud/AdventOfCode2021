import { isIncomplete, simplifyLine } from './part1';

export function selectIncompleteLines(allLines: string[]): string[] {
  return allLines.filter((oneLine) => isIncomplete(simplifyLine(oneLine)));
}

function returnValueForChar(char: string): number {
  if (char === ')') return 1;
  if (char === ']') return 2;
  if (char === '}') return 3;
  if (char === '>') return 4;
  return 0;
}

function findInverseChar(char: string): string {
  if (char === '(') return ')';
  if (char === '[') return ']';
  if (char === '{') return '}';
  if (char === '<') return '>';
  return '';
}

function findMissingPart(line: string): string {
  const inverted = simplifyLine(line).split('').reverse().map(findInverseChar);
  return inverted.join('');
}

export function calculateMissingCharsForOneLine(line: string): number {
  const missingPart = findMissingPart(line);
  return missingPart
    .split('')
    .reduce((acc, value) => acc * 5 + returnValueForChar(value), 0);
}

export function countIncorrectLines(allLines: string[]): number {
  const allValues = selectIncompleteLines(allLines).map((oneLine) =>
    calculateMissingCharsForOneLine(oneLine)
  );
  const intermediateIndex = Math.ceil(allValues.length / 2);
  return allValues.sort((a, b) => a - b)[intermediateIndex - 1];
}
