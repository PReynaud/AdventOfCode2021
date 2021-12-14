import readline from 'readline';
import * as day1 from './2021/day1';
import * as day2 from './2021/day2';
import * as day3 from './2021/day3';
import * as day4 from './2021/day4';
import * as day5 from './2021/day5';
import * as day6 from './2021/day6';
import * as day7 from './2021/day7';
import * as day8 from './2021/day8';
import * as day9 from './2021/day9';
import * as day10 from './2021/day10';
import * as day11 from './2021/day11';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const allDays = {
  '1': day1,
  '2': day2,
  '3': day3,
  '4': day4,
  '5': day5,
  '6': day6,
  '7': day7,
  '8': day8,
  '9': day9,
  '10': day10,
  '11': day11,
};

rl.question('Day ? ', async (dayNumber: string) => {
  if (allDays[dayNumber as keyof typeof allDays]) {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await allDays[dayNumber as keyof typeof allDays].part1();
        rl.close();
      } else {
        await allDays[dayNumber as keyof typeof allDays].part2();
        rl.close();
      }
    });
  }
});

rl.on('close', () => {
  process.exit(0);
});
