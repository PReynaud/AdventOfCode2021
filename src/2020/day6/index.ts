import { readFile } from '../../utils/file.utils';

interface Group {
  responses: string[];
}

export function getResponsesFromGroupPart1(group: Group): Set<string> {
  const allResponses: Set<string> = new Set();
  group.responses.forEach((onePerson) => {
    onePerson
      .trim()
      .split('')
      .forEach((character) => {
        allResponses.add(character);
      });
  });
  return allResponses;
}

export function getResponsesFromGroupPart2(group: Group): number {
  const firstPerson = group.responses[0];
  let allResponses: string[] = firstPerson.trim().split('');

  if (group.responses.length === 1) {
    return allResponses.length;
  }

  group.responses.shift();
  let resultForGroup = 0;

  allResponses.forEach((character: string) => {
    if (
      group.responses.every((person) =>
        person
          .trim()
          .split('')
          .find((c) => c === character)
      )
    ) {
      resultForGroup++;
    }
  });
  return resultForGroup;
}

export function separateGroups(allGroups: string[]): Group[] {
  const results: Group[] = [];
  let currentGroup: Group = { responses: [] };

  allGroups.forEach((line) => {
    if (line === '\r') {
      results.push(currentGroup);
      currentGroup = { responses: [] };
    } else {
      currentGroup.responses.push(line);
    }
  });
  results.push(currentGroup);
  return results;
}

export async function part1() {
  console.log('Start program day 6 - Part 1');

  const allGroups: string[] = await readFile('./src/2020/day6/input.txt');
  const separatedGroups = separateGroups(allGroups);
  const result: number = separatedGroups
    .map((group) => getResponsesFromGroupPart1(group).size)
    .reduce((a, b) => a + b, 0);

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 6 - Part 2');

  const allGroups: string[] = await readFile('./src/2020/day6/input.txt');
  const separatedGroups = separateGroups(allGroups);
  const result: number = separatedGroups
    .map((group) => getResponsesFromGroupPart2(group))
    .reduce((a, b) => a + b, 0);

  console.log('The result is: ', result);
}
