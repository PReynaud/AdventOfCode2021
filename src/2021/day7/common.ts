export function extractInformationsFromRaw(rawString: string): number[] {
  return rawString.split(',').map((value) => Number(value));
}
