import { Command, extractInstructions, Instruction } from './common';

export function extractPositionAndDepth(
  instructions: Instruction[]
): [number, number] {
  let horizontalMouvement = 0;
  let depth = 0;
  let aim = 0;

  instructions.forEach((instruction) => {
    if (instruction.command === Command.FORWARD) {
      horizontalMouvement += instruction.value;
      depth += aim * instruction.value;
    } else if (instruction.command === Command.DOWN) {
      aim += instruction.value;
    } else if (instruction.command === Command.UP) {
      aim -= instruction.value;
    }
  });

  return [horizontalMouvement, depth];
}

export function calculateFromRawInstructions(
  rawInstructions: string[]
): number {
  const instructions = extractInstructions(rawInstructions);
  const [horizontalMouvement, depth] = extractPositionAndDepth(instructions);
  return horizontalMouvement * depth;
}
