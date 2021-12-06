import {
  calculateScoreWinningBoard,
  checkBoardIsWinner,
  extractBoards,
  extractDrawnNumbers,
  markValuesFromDrawnNumber,
} from './common';
import { extractAndRun } from './part1';

describe('Day 4 - Part 1', () => {
  const rawValues = [
    '7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1',
    '',
    '22 13 17 11  0',
    ' 8  2 23  4 24',
    '21  9 14 16  7',
    ' 6 10  3 18  5',
    ' 1 12 20 15 19',
    '',
    ' 3 15  0  2 22',
    ' 9 18 13 17  5',
    '19  8  7 25 23',
    '20 11 10 24  4',
    '14 21 16 12  6',
    '',
    '14 21 17 24  4',
    '10 16 15  9 19',
    '18  8 23 26 20',
    '22 11 13  6  5',
    ' 2  0 12  3  7',
  ];

  it('should extract numbers from raw values', () => {
    const result = extractDrawnNumbers(rawValues);
    expect(result).toEqual([
      7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
      18, 20, 8, 19, 3, 26, 1,
    ]);
  });

  it('should extract boards from raw values', () => {
    const result = extractBoards(rawValues);
    expect(result).toHaveLength(3);
    expect(result[0]).toHaveLength(5);
    expect(result[0][0]).toHaveLength(5);
    expect(result[0][0]).toEqual([
      { value: 22, marked: false },
      { value: 13, marked: false },
      { value: 17, marked: false },
      { value: 11, marked: false },
      { value: 0, marked: false },
    ]);
    expect(result[0][1]).toHaveLength(5);
    expect(result[0][1]).toEqual([
      { value: 8, marked: false },
      { value: 2, marked: false },
      { value: 23, marked: false },
      { value: 4, marked: false },
      { value: 24, marked: false },
    ]);
    expect(result[0][4]).toEqual([
      { value: 1, marked: false },
      { value: 12, marked: false },
      { value: 20, marked: false },
      { value: 15, marked: false },
      { value: 19, marked: false },
    ]);
    expect(result[1][0]).toEqual([
      { value: 3, marked: false },
      { value: 15, marked: false },
      { value: 0, marked: false },
      { value: 2, marked: false },
      { value: 22, marked: false },
    ]);

    console.log(result[2]);
  });

  it('should check if a board is winner or not', () => {
    let toCheck = [
      [
        { value: 22, marked: false },
        { value: 13, marked: false },
        { value: 17, marked: false },
        { value: 11, marked: false },
        { value: 0, marked: false },
      ],
      [
        { value: 8, marked: false },
        { value: 2, marked: false },
        { value: 23, marked: false },
        { value: 4, marked: false },
        { value: 24, marked: false },
      ],
      [
        { value: 21, marked: false },
        { value: 9, marked: false },
        { value: 14, marked: false },
        { value: 16, marked: false },
        { value: 7, marked: false },
      ],
      [
        { value: 6, marked: false },
        { value: 10, marked: false },
        { value: 3, marked: false },
        { value: 18, marked: false },
        { value: 5, marked: false },
      ],
      [
        { value: 1, marked: false },
        { value: 12, marked: false },
        { value: 20, marked: false },
        { value: 15, marked: false },
        { value: 19, marked: false },
      ],
    ];
    expect(checkBoardIsWinner(toCheck)).toBe(false);

    toCheck = [
      [
        { value: 22, marked: false },
        { value: 13, marked: false },
        { value: 17, marked: false },
        { value: 11, marked: false },
        { value: 0, marked: false },
      ],
      [
        { value: 8, marked: false },
        { value: 2, marked: false },
        { value: 23, marked: false },
        { value: 4, marked: false },
        { value: 24, marked: false },
      ],
      [
        { value: 21, marked: true },
        { value: 9, marked: true },
        { value: 14, marked: true },
        { value: 16, marked: true },
        { value: 7, marked: false },
      ],
      [
        { value: 6, marked: false },
        { value: 10, marked: false },
        { value: 3, marked: false },
        { value: 18, marked: false },
        { value: 5, marked: false },
      ],
      [
        { value: 1, marked: false },
        { value: 12, marked: false },
        { value: 20, marked: false },
        { value: 15, marked: false },
        { value: 19, marked: false },
      ],
    ];
    expect(checkBoardIsWinner(toCheck)).toBe(false);
    toCheck[2][4].marked = true;
    expect(checkBoardIsWinner(toCheck)).toBe(true);

    toCheck = [
      [
        { value: 22, marked: false },
        { value: 13, marked: false },
        { value: 17, marked: false },
        { value: 11, marked: false },
        { value: 0, marked: false },
      ],
      [
        { value: 8, marked: false },
        { value: 2, marked: true },
        { value: 23, marked: false },
        { value: 4, marked: false },
        { value: 24, marked: false },
      ],
      [
        { value: 21, marked: false },
        { value: 9, marked: true },
        { value: 14, marked: false },
        { value: 16, marked: false },
        { value: 7, marked: false },
      ],
      [
        { value: 6, marked: false },
        { value: 10, marked: true },
        { value: 3, marked: false },
        { value: 18, marked: false },
        { value: 5, marked: false },
      ],
      [
        { value: 1, marked: false },
        { value: 12, marked: true },
        { value: 20, marked: false },
        { value: 15, marked: false },
        { value: 19, marked: false },
      ],
    ];
    expect(checkBoardIsWinner(toCheck)).toBe(false);
    toCheck[0][1].marked = true;
    expect(checkBoardIsWinner(toCheck)).toBe(true);
  });

  it('should mark found values', () => {
    const board = [
      [
        { value: 22, marked: false },
        { value: 13, marked: false },
        { value: 17, marked: false },
        { value: 11, marked: false },
        { value: 0, marked: false },
      ],
      [
        { value: 8, marked: false },
        { value: 2, marked: false },
        { value: 23, marked: false },
        { value: 4, marked: false },
        { value: 24, marked: false },
      ],
      [
        { value: 21, marked: false },
        { value: 9, marked: false },
        { value: 14, marked: false },
        { value: 16, marked: false },
        { value: 7, marked: false },
      ],
      [
        { value: 6, marked: false },
        { value: 10, marked: false },
        { value: 3, marked: false },
        { value: 18, marked: false },
        { value: 5, marked: false },
      ],
      [
        { value: 1, marked: false },
        { value: 12, marked: false },
        { value: 20, marked: false },
        { value: 15, marked: false },
        { value: 19, marked: false },
      ],
    ];
    markValuesFromDrawnNumber(board, 22);
    expect(board[0][0].marked).toBe(true);

    markValuesFromDrawnNumber(board, 0);
    expect(board[0][4].marked).toBe(true);

    markValuesFromDrawnNumber(board, 21);
    markValuesFromDrawnNumber(board, 18);
    markValuesFromDrawnNumber(board, 19);
    expect(board).toMatchSnapshot();
  });

  it('should calculate score of winning board', () => {
    const example = [
      [
        { value: 14, marked: true },
        { value: 21, marked: true },
        { value: 17, marked: true },
        { value: 24, marked: true },
        { value: 4, marked: true },
      ],
      [
        { value: 10, marked: false },
        { value: 16, marked: false },
        { value: 15, marked: false },
        { value: 9, marked: true },
        { value: 19, marked: false },
      ],
      [
        { value: 18, marked: false },
        { value: 8, marked: false },
        { value: 23, marked: true },
        { value: 26, marked: false },
        { value: 20, marked: false },
      ],
      [
        { value: 22, marked: false },
        { value: 11, marked: true },
        { value: 13, marked: false },
        { value: 6, marked: false },
        { value: 5, marked: true },
      ],
      [
        { value: 2, marked: true },
        { value: 0, marked: true },
        { value: 12, marked: false },
        { value: 3, marked: false },
        { value: 7, marked: true },
      ],
    ];
    expect(calculateScoreWinningBoard(example)).toEqual(188);
  });

  it('should validate the example', () => {
    expect(extractAndRun(rawValues)).toEqual(4512);
  });
});
