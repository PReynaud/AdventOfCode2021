export function isInvalid(value?: any): value is null | undefined {
  return value === null || value === undefined || value === '';
}

export function isIncreasing(
  value1?: number | null,
  value2?: number | null
): boolean {
  return !isInvalid(value1) && !isInvalid(value2) && value1 < value2;
}
