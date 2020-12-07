import { checkHeight, checkNumbers, checkHairColor } from '.';

describe('Day 4 ', () => {
  it('should check value between two numbers', () => {
    expect(checkNumbers('1925', 1920, 2002)).toBeTruthy();
    expect(checkNumbers('1929', 1920, 2002)).toBeTruthy();
    expect(checkNumbers('1920', 1920, 2002)).toBeTruthy();
    expect(checkNumbers('2002', 1920, 2002)).toBeTruthy();

    expect(checkNumbers('192', 1920, 2002)).toBeFalsy();
    expect(checkNumbers('1919', 1920, 2002)).toBeFalsy();
    expect(checkNumbers('2003', 1920, 2002)).toBeFalsy();
    expect(checkNumbers('192cm', 1920, 2002)).toBeFalsy();
  });

  it('should check height', () => {
    expect(checkHeight('159cm')).toBeTruthy();
    expect(checkHeight('150cm')).toBeTruthy();
    expect(checkHeight('193cm')).toBeTruthy();
    expect(checkHeight('70in')).toBeTruthy();
    expect(checkHeight('59in')).toBeTruthy();
    expect(checkHeight('76in')).toBeTruthy();

    expect(checkHeight('76')).toBeFalsy();
    expect(checkHeight('76c')).toBeFalsy();
    expect(checkHeight('76cm')).toBeFalsy();
    expect(checkHeight('190in')).toBeFalsy();
  });

  it('should check hair color', () => {
    expect(checkHairColor('#123456')).toBeTruthy();
    expect(checkHairColor('#abcdef')).toBeTruthy();
    expect(checkHairColor('#12cd56')).toBeTruthy();

    expect(checkHairColor('#12cd5')).toBeFalsy();
    expect(checkHairColor('#12cd5A')).toBeFalsy();
    expect(checkHairColor('#12cd5g')).toBeFalsy();
  });
});
