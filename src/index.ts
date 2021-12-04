import readline from 'readline';
import * as day1 from './2021/day1';
import * as day2 from './2021/day2';
import * as day3 from './2021/day3';
import * as day4 from './2021/day1';
import * as day5 from './2021/day1';
import * as day6 from './2021/day1';
import * as day7 from './2021/day1';
import * as day8 from './2021/day1';
import * as day9 from './2021/day1';
import * as day10 from './2021/day1';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Day ? ', async (dayNumber: string) => {
  if (dayNumber === '1') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day1.part1();
        rl.close();
      } else {
        await day1.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '2') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day2.part1();
        rl.close();
      } else {
        await day2.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '3') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day3.part1();
        rl.close();
      } else {
        await day3.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '4') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day4.part1();
        rl.close();
      } else {
        await day4.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '5') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day5.part1();
        rl.close();
      } else {
        await day5.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '6') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day6.part1();
        rl.close();
      } else {
        await day6.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '7') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day7.part1();
        rl.close();
      } else {
        await day7.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '8') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day8.part1();
        rl.close();
      } else {
        await day8.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '9') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day9.part1();
        rl.close();
      } else {
        await day9.part2();
        rl.close();
      }
    });
  }

  if (dayNumber === '10') {
    rl.question('Part ? ', async (part: string) => {
      if (part === '1') {
        await day10.part1();
        rl.close();
      } else {
        await day10.part2();
        rl.close();
      }
    });
  }
});

rl.on('close', () => {
  process.exit(0);
});
