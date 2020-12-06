export interface PasswordValidityRule {
  min: number;
  max: number;
  character: string;
}

export interface PasswordAndRule {
  rule: PasswordValidityRule;
  password: string;
}

export function createRuleFromString(
  ruleToConvert: string
): PasswordValidityRule {
  let minMax: string, character: string;
  [minMax, character] = ruleToConvert.split(' ');
  let minAsString: string, maxAsString: string;
  [minAsString, maxAsString] = minMax.split('-');
  return {
    min: Number(minAsString),
    max: Number(maxAsString),
    character,
  };
}

export function getRuleAndPasswordFromString(
  lineToConvert: string
): PasswordAndRule {
  let stringRule: string, password: string;
  [stringRule, password] = lineToConvert.split(': ');
  return {
    rule: createRuleFromString(stringRule),
    password,
  };
}
