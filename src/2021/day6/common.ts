export function extractValuesFromRaw(raw: string): number[] {
  return raw.split(',').map((value) => Number(value));
}
