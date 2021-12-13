export function extractSecondPartValuesFromRaw(
  rawValues: string[]
): string[][] {
  const [firstPart, secondPart] = extractPartsValuesFromRaw(rawValues);
  return secondPart;
}

export function extractPartsValuesFromRaw(rawValues: string[]): string[][][] {
  const result1: string[][] = [];
  const result2: string[][] = [];

  rawValues.forEach((row) => {
    const [firstPart, secondPart] = row.split(' | ');
    result1.push(firstPart.trim().split(' '));
    result2.push(secondPart.trim().split(' '));
  });

  return [result1, result2];
}
