export function simplifyLine(value: string): string {
  let currentValue = value;
  let previousValue = currentValue;
  do {
    previousValue = currentValue;
    currentValue = currentValue
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '')
      .replace('<>', '');
  } while (currentValue && currentValue.length < previousValue.length);
  return currentValue;
}

const openingChars = ['[', '{', '(', '<'];

export function isIncomplete(line: string): boolean {
  return line.split('').every((char) => openingChars.includes(char));
}

function findFirstWrongChar(line: string): string {
  for (let i = 0; i < line.length; i++) {
    if (!openingChars.includes(line[i])) {
      return line[i];
    }
  }
  return '';
}

export function simplifyAndFind(line: string): string {
  return findFirstWrongChar(simplifyLine(line));
}

export function selectIncorrectLines(allLines: string[]): string[] {
  return allLines.filter((oneLine) => !isIncomplete(simplifyLine(oneLine)));
}

function returnValueForChar(char: string): number {
  if (char === ')') return 3;
  if (char === ']') return 57;
  if (char === '}') return 1197;
  if (char === '>') return 25137;
  return 0;
}

export function countIncorrectLines(allLines: string[]): number {
  return selectIncorrectLines(allLines)
    .map(simplifyAndFind)
    .map(returnValueForChar)
    .reduce((acc, value) => acc + value, 0);
}
