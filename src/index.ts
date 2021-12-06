import readline from 'readline';
import * as day1 from './2021/day1';
import * as day2 from './2021/day2';
import * as day3 from './2021/day3';
import * as day4 from './2021/day4';
import * as day5 from './2021/day5';

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
