import { getRuleAndPasswordFromString, PasswordAndRule } from './common';

export function numberOfCharacter(toTest: string, character: string): number {
  return (toTest.match(new RegExp(character, 'g')) || []).length;
}

export function isPasswordValid({ password, rule }: PasswordAndRule): boolean {
  const numberOfCharacterForPassword = numberOfCharacter(
    password,
    rule.character
  );
  return (
    numberOfCharacterForPassword >= rule.min &&
    numberOfCharacterForPassword <= rule.max
  );
}

export function isLineValid(line: string): boolean {
  console.log('Check line', line);

  const ruleAndPassword = getRuleAndPasswordFromString(line);
  return isPasswordValid(ruleAndPassword);
}
