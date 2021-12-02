import { Command } from './common';
import { calculateFromRawInstructions, extractPositionAndDepth } from './part2';

describe('Day 2 - Part 2', () => {
  it('should calculate position and depth from instructions', () => {
    const instructions = [
      { command: Command.FORWARD, value: 5 },
      { command: Command.DOWN, value: 5 },
      { command: Command.FORWARD, value: 8 },
      { command: Command.UP, value: 3 },
      { command: Command.DOWN, value: 8 },
      { command: Command.FORWARD, value: 2 },
    ];
    const [horizontalMouvement, depth] = extractPositionAndDepth(instructions);
    expect(horizontalMouvement).toEqual(15);
    expect(depth).toEqual(60);
  });

  it('should validate the example', () => {
    const example = [
      'forward 5',
      'down 5',
      'forward 8',
      'up 3',
      'down 8',
      'forward 2',
    ];
    const result = calculateFromRawInstructions(example);
    expect(result).toEqual(900);
  });
});
