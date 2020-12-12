import { readFile } from '../../utils/file.utils';
import {
  ExtendedInstruction,
  parseExtendedInstruction,
  testMultiplePrograms,
} from './part2';

export enum InstructionType {
  nop = 'nop',
  acc = 'acc',
  jmp = 'jmp',
}

export interface Instruction {
  type: InstructionType;
  param?: number;
  numberOfExecutions: number;
}

export function parseInstruction(instructionString: string): Instruction {
  const instructionStringSplitted = instructionString.trim().split(' ');

  const typeString = instructionStringSplitted[0];
  if (typeString === 'nop' || typeString === 'acc' || typeString === 'jmp') {
    const type: keyof typeof InstructionType = typeString;
    const param = instructionStringSplitted[1];
    return {
      type: InstructionType[type],
      param: Number(param),
      numberOfExecutions: 0,
    };
  }
  return {
    type: InstructionType.nop,
    param: 0,
    numberOfExecutions: 0,
  };
}

export interface ProgramState {
  currentIndex: number;
  accumulator: number;
}

function shouldContinue(
  instructions: Instruction[],
  currentIndex: number
): boolean {
  return instructions[currentIndex].numberOfExecutions < 1;
}

function executeNextInstruction(
  instructions: Instruction[],
  currentIndex: number,
  accumulator: number
): ProgramState {
  const currentInstruction = instructions[currentIndex];
  currentInstruction.numberOfExecutions++;
  if (currentInstruction.type === InstructionType.nop) {
    return { currentIndex: currentIndex + 1, accumulator };
  } else if (
    currentInstruction.type === InstructionType.acc &&
    currentInstruction.param !== undefined
  ) {
    accumulator += currentInstruction.param;
    return { currentIndex: currentIndex + 1, accumulator };
  } else if (
    currentInstruction.type === InstructionType.jmp &&
    currentInstruction.param !== undefined
  ) {
    return {
      currentIndex: currentIndex + currentInstruction.param,
      accumulator,
    };
  }
  return { currentIndex: 0, accumulator: 0 };
}

function executeProgram(instructions: Instruction[]): number {
  let currentIndex: number = 0,
    accumulator: number = 0;

  while (shouldContinue(instructions, currentIndex)) {
    const newProgramState = executeNextInstruction(
      instructions,
      currentIndex,
      accumulator
    );
    currentIndex = newProgramState.currentIndex;
    accumulator = newProgramState.accumulator;

    console.log({ currentIndex, accumulator });
  }

  return accumulator;
}

export async function part1() {
  console.log('Start program day 8 - Part 1');

  const allInstructions: string[] = await readFile('./src/2020/day8/input.txt');
  const parsedInstructions: Instruction[] = allInstructions.map(
    parseInstruction
  );
  const result = executeProgram(parsedInstructions);

  console.log('The result is: ', result);
}

export async function part2() {
  console.log('Start program day 8 - Part 2');

  const allInstructions: string[] = await readFile('./src/2020/day8/input.txt');
  const parsedInstructions: ExtendedInstruction[] = allInstructions.map(
    parseExtendedInstruction
  );
  const result = testMultiplePrograms(parsedInstructions);

  console.log('The result is: ', result);
}
