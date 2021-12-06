import {
  BoardCase,
  calculateScoreWinningBoard,
  checkBoardIsWinner,
  extractBoards,
  extractDrawnNumbers,
  markValuesFromDrawnNumber,
} from './common';

function run(boards: BoardCase[][][], initialNumbers: number[]): number | null {
  let hasWinning = false;
  let numbersToDraw = initialNumbers.slice();
  let currentDrawnNumber: number | null = null;
  let notWinningBoards: BoardCase[][][] = [];

  while (!hasWinning && numbersToDraw.length > 0) {
    notWinningBoards = boards.filter((board) => !checkBoardIsWinner(board));
    currentDrawnNumber = numbersToDraw[0];
    boards.forEach((board) =>
      markValuesFromDrawnNumber(board, currentDrawnNumber!)
    );
    hasWinning = boards.every((board) => checkBoardIsWinner(board));
    numbersToDraw = numbersToDraw.slice(1);
  }

  if (hasWinning) {
    // Last board is the one containing the last drawn value
    const losingBoard = notWinningBoards[0];
    const score = calculateScoreWinningBoard(losingBoard!);
    return score * currentDrawnNumber!;
  }

  return null;
}

export function extractAndRun(rawValues: string[]): number | null {
  const drawnNumbers = extractDrawnNumbers(rawValues);
  const boards = extractBoards(rawValues);

  return run(boards, drawnNumbers);
}
