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

  while (!hasWinning && numbersToDraw.length > 0) {
    currentDrawnNumber = numbersToDraw[0];
    boards.forEach((board) =>
      markValuesFromDrawnNumber(board, currentDrawnNumber!)
    );
    hasWinning = boards.some((board) => checkBoardIsWinner(board));
    numbersToDraw = numbersToDraw.slice(1);
  }

  if (hasWinning) {
    const winningBoard = boards.find((board) => checkBoardIsWinner(board));
    const score = calculateScoreWinningBoard(winningBoard!);
    return score * currentDrawnNumber!;
  }

  return null;
}

export function extractAndRun(rawValues: string[]): number | null {
  const drawnNumbers = extractDrawnNumbers(rawValues);
  const boards = extractBoards(rawValues);

  return run(boards, drawnNumbers);
}
