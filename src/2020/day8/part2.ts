import { Instruction, InstructionType, ProgramState } from '.';

export interface ExtendedInstruction extends Instruction {
  hasBeenTested: boolean;
  changeCurrentInstruction: boolean;
}

export interface ExtendedProgramState extends ProgramState {
  hasChangedAnInstruction: boolean;
}

export function parseExtendedInstruction(
  instructionString: string
): ExtendedInstruction {
  const instructionStringSplitted = instructionString.trim().split(' ');

  const typeString = instructionStringSplitted[0];
  if (typeString === 'nop' || typeString === 'acc' || typeString === 'jmp') {
    const type: keyof typeof InstructionType = typeString;
    const param = instructionStringSplitted[1];
    return {
      type: InstructionType[type],
      param: Number(param),
      numberOfExecutions: 0,
      hasBeenTested: false,
      changeCurrentInstruction: false,
    };
  }
  return {
    type: InstructionType.nop,
    param: 0,
    numberOfExecutions: 0,
    hasBeenTested: false,
    changeCurrentInstruction: false,
  };
}

function shouldContinue(
  instructions: ExtendedInstruction[],
  currentIndex: number
): boolean {
  return (
    instructions[currentIndex] &&
    instructions[currentIndex].numberOfExecutions < 1
  );
}

function isProgramTerminated(
  instructions: ExtendedInstruction[],
  currentIndex: number
): boolean {
  return currentIndex >= instructions.length - 1;
}

function shouldChangeInstruction(
  instruction: ExtendedInstruction,
  state: ExtendedProgramState
): boolean {
  if (instruction.hasBeenTested || state.hasChangedAnInstruction) {
    return false;
  }
  instruction.hasBeenTested = true;
  state.hasChangedAnInstruction = true;
  return true;
}

function executeNoc(state: ExtendedProgramState): ExtendedProgramState {
  return {
    currentIndex: state.currentIndex + 1,
    accumulator: state.accumulator,
    hasChangedAnInstruction: state.hasChangedAnInstruction,
  };
}

function executeJump(
  state: ExtendedProgramState,
  param: number
): ExtendedProgramState {
  return {
    currentIndex: state.currentIndex + param,
    accumulator: state.accumulator,
    hasChangedAnInstruction: state.hasChangedAnInstruction,
  };
}

function executeAcc(
  state: ExtendedProgramState,
  param: number
): ExtendedProgramState {
  state.accumulator += param;
  return {
    currentIndex: state.currentIndex + 1,
    accumulator: state.accumulator,
    hasChangedAnInstruction: state.hasChangedAnInstruction,
  };
}

function resetInstructions(instructions: ExtendedInstruction[]): void {
  instructions.forEach((instruction) => {
    instruction.numberOfExecutions = 0;
  });
}

function executeNextInstruction(
  instructions: ExtendedInstruction[],
  state: ExtendedProgramState
): ExtendedProgramState {
  const currentInstruction = instructions[state.currentIndex];
  currentInstruction.numberOfExecutions++;

  if (
    currentInstruction.type === InstructionType.nop &&
    currentInstruction.param !== undefined
  ) {
    if (shouldChangeInstruction(currentInstruction, state)) {
      return executeJump(state, currentInstruction.param);
    }
    return executeNoc(state);
  } else if (
    currentInstruction.type === InstructionType.acc &&
    currentInstruction.param !== undefined
  ) {
    return executeAcc(state, currentInstruction.param);
  } else if (
    currentInstruction.type === InstructionType.jmp &&
    currentInstruction.param !== undefined
  ) {
    if (shouldChangeInstruction(currentInstruction, state)) {
      return executeNoc(state);
    }
    return executeJump(state, currentInstruction.param);
  }
  return { currentIndex: 0, accumulator: 0, hasChangedAnInstruction: false };
}

function executeProgram(instructions: ExtendedInstruction[]): ProgramState {
  let currentIndex: number = 0,
    accumulator: number = 0,
    hasChangedAnInstruction: boolean = false;

  while (shouldContinue(instructions, currentIndex)) {
    const newProgramState = executeNextInstruction(instructions, {
      currentIndex,
      accumulator,
      hasChangedAnInstruction,
    });

    currentIndex = newProgramState.currentIndex;
    accumulator = newProgramState.accumulator;
    hasChangedAnInstruction = newProgramState.hasChangedAnInstruction;
  }

  return { currentIndex, accumulator };
}

export function testMultiplePrograms(
  instructions: ExtendedInstruction[]
): number {
  let state: ProgramState | null = null;

  do {
    state = executeProgram(instructions);
    resetInstructions(instructions);
  } while (!isProgramTerminated(instructions, state.currentIndex));

  return state.accumulator;
}
