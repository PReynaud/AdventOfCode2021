import { readFile } from '../../utils/file.utils';

enum ExpectedFieldEnum {
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  'cid',
}

const AllAvailableFields = [
  'byr',
  'iyr',
  'eyr',
  'hgt',
  'hcl',
  'ecl',
  'pid',
  'cid',
];

export function checkNumbers(value: string, min: number, max: number): boolean {
  const toTest = Number(value);
  return toTest >= min && toTest <= max;
}

export function checkHeight(value: string): boolean {
  const regex = /\d+(cm|in)$/;
  if (!value.match(regex)) {
    return false;
  }

  const foundUnit = value.match(/\D+/);
  const foundNumber = value.match(/\d+/);
  if (foundUnit && foundNumber && foundUnit[0] === 'cm') {
    return checkNumbers(foundNumber[0]!, 150, 193);
  } else if (foundNumber) {
    return checkNumbers(foundNumber[0]!, 59, 76);
  }
  return false;
}

export function checkHairColor(value: string): boolean {
  const match = value.match(/^#(([0-9]|[a-f]){6})$/);
  return match ? match.length > 0 : false;
}

export function checkEyeColor(value: string): boolean {
  const availableValues = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];
  return availableValues.includes(value);
}

export function checkPassportId(value: string): boolean {
  const match = value.match(/^\d{9}$/);
  return match ? match.length > 0 : false;
}

const allRules: Record<string, (value: string) => boolean> = {
  byr: (value: string) => checkNumbers(value, 1920, 2002),
  iyr: (value: string) => checkNumbers(value, 2010, 2020),
  eyr: (value: string) => checkNumbers(value, 2020, 2030),
  hgt: (value: string) => checkHeight(value),
  hcl: (value: string) => checkHairColor(value),
  ecl: (value: string) => checkEyeColor(value),
  pid: (value: string) => checkPassportId(value),
  cid: (value: string) => true,
};

interface Information {
  field: keyof typeof ExpectedFieldEnum;
  value: string;
}

function isFieldAvailable(rawField: string): boolean {
  return AllAvailableFields.includes(rawField);
}

function isFieldValid(rawField: string, value: string): boolean {
  // return true; // Part 1
  return allRules[rawField](value);
}

function parseInformation(rawInformation: string): Information | null {
  let rawField: any, value;
  [rawField, value] = rawInformation.split(':');

  if (isFieldAvailable(rawField) && isFieldValid(rawField, value)) {
    return {
      field: rawField,
      value,
    };
  }
  return null;
}

function parseLine(line: string): Information[] {
  const allCouples = line.trim().split(' ');
  const results: Information[] = [];
  allCouples.forEach((couple) => {
    const parsedInformation = parseInformation(couple);
    if (parsedInformation) {
      results.push(parsedInformation);
    }
  });
  return results;
}

class Passport {
  public fields: Information[];

  constructor(allLines: string[]) {
    this.fields = [];
    allLines.forEach((line) => this.fields.push(...parseLine(line)));
  }

  isValid(): boolean {
    if (this.fields.length === 8) {
      return true;
    } else if (this.fields.length === 7) {
      return this.fields.every((field) => field.field !== 'cid');
    } else {
      return false;
    }
  }
}

export function separatePassports(allPassports: string[]): Passport[] {
  const results: Passport[] = [];
  let currentPassport: string[] = [];
  allPassports.forEach((line) => {
    if (line === '\r') {
      results.push(new Passport(currentPassport));
      currentPassport = [];
    } else {
      currentPassport.push(line);
    }
  });
  results.push(new Passport(currentPassport));
  return results;
}

export async function part1() {
  console.log('Start program day 4 - Part 1');

  const allRawPassports: string[] = await readFile('./src/2020/day4/input.txt');
  const allPassports = separatePassports(allRawPassports);
  const result = allPassports.filter((passport) => passport.isValid()).length;

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 4 - Part 2');

  const allRawPassports: string[] = await readFile('./src/2020/day4/input.txt');
  const allPassports = separatePassports(allRawPassports);
  const result = allPassports.filter((passport) => passport.isValid()).length;

  console.log('The result is: ', result);
}
