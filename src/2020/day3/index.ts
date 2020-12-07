import { readFile } from '../../utils/file.utils';

export interface Position {
  x: number;
  y: number;
}

export interface Movement {
  toRight: number;
  toBottom: number;
}

export function getNextXAxisPosition(
  initialPosition: number,
  movement: number,
  mapSize: number
): number {
  const newPosition = initialPosition + movement;
  if (newPosition >= mapSize) {
    return newPosition - mapSize;
  }
  return newPosition;
}

export function getNextYAxisPosition(
  initialPosition: number,
  movement: number
): number {
  const newPosition = initialPosition + movement;
  return newPosition;
}

export function getMapXSize(map: string[]): number {
  return map && map.length > 0 ? map[0].trim().length : 0;
}

export function getValue(map: string[], position: Position): string {
  return map[position.y].charAt(position.x);
}

export function getNextPosition(
  map: string[],
  initialPosition: Position,
  movement: Movement
): Position {
  return {
    x: getNextXAxisPosition(
      initialPosition.x,
      movement.toRight,
      getMapXSize(map)
    ),
    y: getNextYAxisPosition(initialPosition.y, movement.toBottom),
  };
}

export function isBeyondBottomLimit(
  map: string[],
  position: Position
): boolean {
  return position.y >= map.length;
}

export function cloneMap(map: string[]): string[] {
  const newMap: string[] = [];
  map.forEach((line) => {
    let newLine = '';
    for (let i = 0; i < line.length; i++) {
      newLine += line[i];
    }
    newMap.push(newLine);
  });
  return newMap;
}

export function displayPosition(map: string[], position: Position): void {
  const clonedMap: string[] = cloneMap(map);
  const currentLine = clonedMap[position.y];
  const currentLineChars = currentLine.split('');
  if (currentLineChars[position.x] === '.') {
    currentLineChars[position.x] = 'O';
  } else {
    currentLineChars[position.x] = 'X';
  }
  clonedMap[position.y] = currentLineChars.join('');

  console.log(clonedMap.join('\n'));
}

export function getFinalResult(map: string[], movement: Movement): number {
  let currentPosition: Position = {
    x: 0,
    y: 0,
  };
  let result = 0;

  let isBeyondLimit = false;
  while (!isBeyondLimit) {
    // displayPosition(map, currentPosition);

    currentPosition = getNextPosition(map, currentPosition, movement);
    isBeyondLimit = isBeyondBottomLimit(map, currentPosition);
    if (!isBeyondLimit) {
      const hitTree = getValue(map, currentPosition) === '#';
      console.log('Current position', currentPosition, hitTree);
      if (hitTree) {
        result++;
      }
    }
  }

  return result;
}

export async function part1() {
  console.log('Start program day 3 - Part 1');

  const map: string[] = await readFile('./src/2020/day3/input.txt');
  const movement: Movement = {
    toRight: 3,
    toBottom: 1,
  };

  const result = getFinalResult(map, movement);

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 3 - Part 2');

  const map: string[] = await readFile('./src/2020/day3/input.txt');
  const movements: Movement[] = [
    {
      toRight: 1,
      toBottom: 1,
    },
    {
      toRight: 3,
      toBottom: 1,
    },
    {
      toRight: 5,
      toBottom: 1,
    },
    {
      toRight: 7,
      toBottom: 1,
    },
    {
      toRight: 1,
      toBottom: 2,
    },
  ];

  const reducer = (accumulator: number, movement: Movement) =>
    accumulator * getFinalResult(map, movement);
  const result = movements.reduce(reducer, 1);

  console.log('The result is: ', result);
}
