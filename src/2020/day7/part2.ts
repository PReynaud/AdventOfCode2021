import { readFile } from '../../utils/file.utils';

export interface BagContent {
  name: string;
  numberOfBags: number;
}

export interface Bag {
  name: string;
  content: BagContent[];
}

export function parseRule(rule: string): Bag {
  const regex = /(\d *)*(\w* \w*) bag/g;
  const results = rule.matchAll(regex);
  const [bagName, ...content] = results;

  // If last bag
  if (content && content[0] && content[0][0] === 'no other bag') {
    return {
      name: bagName[2],
      content: [],
    };
  }

  return {
    name: bagName[2],
    content: content.map((c) => {
      return {
        name: c[2],
        numberOfBags: c[1] ? Number(c[1].trim()) : 0,
      };
    }),
  };
}

function findBag(bag: BagContent, allBags: Bag[]): Bag {
  return allBags.find((currentBag) => currentBag.name === bag.name)!;
}

export function countBags(bag: BagContent, allBags: Bag[]): number {
  const foundBag: Bag = findBag(bag, allBags);
  const resultChildren = foundBag.content
    .map((c) => countBags(c, allBags) * c.numberOfBags)
    .reduce((a, b) => a + b, 0);

  return resultChildren + 1;
}

export async function part2() {
  console.log('Start program day 6 - Part 2');

  const allRules: string[] = await readFile('./src/2020/day7/input.txt');
  let allBags: Bag[] = allRules.map(parseRule);
  const result = countBags({ name: 'shiny gold', numberOfBags: 1 }, allBags);

  console.log('The result is: ', result - 1);
}
