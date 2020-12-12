import { InstructionType, parseInstruction } from '.';

describe('Day 8', () => {
  it('should parse instruction', () => {
    expect(parseInstruction('nop +0')).toEqual({
      type: InstructionType.nop,
      param: 0,
      numberOfExecutions: 0,
    });
    expect(parseInstruction('acc +1')).toEqual({
      type: InstructionType.acc,
      param: 1,
      numberOfExecutions: 0,
    });
    expect(parseInstruction('jmp +4')).toEqual({
      type: InstructionType.jmp,
      param: 4,
      numberOfExecutions: 0,
    });
    expect(parseInstruction('acc -99')).toEqual({
      type: InstructionType.acc,
      param: -99,
      numberOfExecutions: 0,
    });
  });
});
