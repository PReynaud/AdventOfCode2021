import { cutInHalf, getSeatIdFromCode } from '.';

describe('Day 5', () => {
  it('should get the right seat ID', () => {
    expect(getSeatIdFromCode('BFFFBBFRRR')).toEqual(567);
    expect(getSeatIdFromCode('FFFBBBFRRR')).toEqual(119);
    expect(getSeatIdFromCode('BBFFBBFRLL')).toEqual(820);
  });

  it('should correctly cut an interval in half', () => {
    expect(cutInHalf({ min: 0, max: 127 }, 'F')).toEqual({ min: 0, max: 63 });
    expect(cutInHalf({ min: 0, max: 63 }, 'B')).toEqual({ min: 32, max: 63 });
    expect(cutInHalf({ min: 32, max: 63 }, 'F')).toEqual({ min: 32, max: 47 });
    expect(cutInHalf({ min: 32, max: 47 }, 'B')).toEqual({ min: 40, max: 47 });
    expect(cutInHalf({ min: 40, max: 47 }, 'B')).toEqual({ min: 44, max: 47 });
    expect(cutInHalf({ min: 44, max: 47 }, 'F')).toEqual({ min: 44, max: 45 });
    expect(cutInHalf({ min: 44, max: 45 }, 'F')).toEqual({ min: 44, max: 44 });

    expect(cutInHalf({ min: 0, max: 7 }, 'R')).toEqual({ min: 4, max: 7 });
    expect(cutInHalf({ min: 4, max: 7 }, 'L')).toEqual({ min: 4, max: 5 });
    expect(cutInHalf({ min: 4, max: 5 }, 'R')).toEqual({ min: 5, max: 5 });
  });
});
