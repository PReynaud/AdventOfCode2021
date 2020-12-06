import readline from 'readline';
import * as day1 from './2020/day1/';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Which day ? ', async (dayNumber: string) => {
  if (dayNumber === '1') {
    await day1.runPart2();
  }
  rl.close();
});

rl.on('close', () => {
  process.exit(0);
});
