export enum Command {
  FORWARD = 'forward',
  UP = 'up',
  DOWN = 'down',
}

export type Instruction = {
  command: Command;
  value: number;
};

export function extractInstructions(rawInstructions: string[]): Instruction[] {
  return rawInstructions.map((rawInstruction) => {
    const [rawCommand, rawValue] = rawInstruction.split(' ');
    const command = rawCommand as Command;
    return { command, value: Number(rawValue) };
  });
}
