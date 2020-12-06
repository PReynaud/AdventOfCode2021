import { getRuleAndPasswordFromString, PasswordAndRule } from './common';

export function checkPosition(
  toCheck: string,
  character: string,
  position: number
): boolean {
  if (position <= 0) {
    console.error('Bad index');
    return false;
  }
  return toCheck[position - 1] === character;
}

export function checkBothPositions(
  toCheck: string,
  character: string,
  position1: number,
  position2: number
): boolean {
  const firstCheck = checkPosition(toCheck, character, position1);
  const secondCheck = checkPosition(toCheck, character, position2);
  return (firstCheck && !secondCheck) || (secondCheck && !firstCheck);
}

export function isPasswordValid({ password, rule }: PasswordAndRule) {
  return checkBothPositions(password, rule.character, rule.min, rule.max);
}

export function isLineValid(line: string): boolean {
  console.log('Check line', line);

  const ruleAndPassword = getRuleAndPasswordFromString(line);
  return isPasswordValid(ruleAndPassword);
}
