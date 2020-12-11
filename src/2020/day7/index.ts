import { readFile } from '../../utils/file.utils';
export * from './part2';

export interface Bag {
  name: string;
  content: string[];
}

export function parseRule(rule: string): Bag {
  const regex = /(\w* \w*) bag/g;
  const results = rule.matchAll(regex);
  const [bagName, ...content] = results;
  return {
    name: bagName[1],
    content: content.map((c) => c[1]),
  };
}

function removeBagFromBags(bags: Bag[], bagName: string): Bag[] {
  return bags.filter((bag) => bag.name !== bagName);
}

function isBagContainingBag(target: Bag, searchBag: Bag): boolean {
  return (
    target.content.find((bagName) => bagName === searchBag.name) !== undefined
  );
}

function separateBags(canContainBag: Bag[], otherBags: Bag[]): [Bag[], Bag[]] {
  const newCanContainBag: Bag[] = [];
  const newOtherBags: Bag[] = [];

  otherBags.forEach((otherBag) => {
    if (canContainBag.some((bag) => isBagContainingBag(otherBag, bag))) {
      newCanContainBag.push(otherBag);
    } else {
      newOtherBags.push(otherBag);
    }
  });

  return [[...canContainBag, ...newCanContainBag], newOtherBags];
}

function sortAllBags(searchBag: Bag, allBags: Bag[]): Bag[] {
  let [canContainBag, otherBags] = separateBags([searchBag], allBags);
  let [newCanContainBag, newOtherBags]: Bag[][] = [[], []];

  while (canContainBag.length !== newCanContainBag.length) {
    [newCanContainBag, newOtherBags] = separateBags(canContainBag, otherBags);
    [canContainBag, otherBags] = separateBags(newCanContainBag, newOtherBags);
  }

  return canContainBag;
}

export async function part1() {
  console.log('Start program day 7 - Part 2');

  const allRules: string[] = await readFile('./src/2020/day7/input.txt');
  let allBags: Bag[] = allRules.map(parseRule);
  allBags = removeBagFromBags(allBags, 'shiny gold');
  const result = sortAllBags({ name: 'shiny gold', content: [] }, allBags);

  console.log('The result is: ', result.length - 1);
}
