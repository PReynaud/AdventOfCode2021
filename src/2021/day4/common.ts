export interface BoardCase {
  value: number;
  marked: boolean;
}

export function extractDrawnNumbers(rawValues: string[]): number[] {
  const rawDraws = rawValues[0];
  return rawDraws.split(',').map((oneValue) => Number(oneValue));
}

function splitStringIntoChunks(toCut: string): string[] {
  const chunks = [];
  let i = 0;
  while (i < 3 || i < toCut.length) {
    chunks.push(toCut.slice(i, (i += 3)));
  }
  return chunks;
}

function extractOneLine(rawValues: string): BoardCase[] {
  const extractedValues = splitStringIntoChunks(rawValues.slice());
  return extractedValues.map((stringValue) => ({
    value: Number(stringValue.trim()),
    marked: false,
  }));
}

function extractOneBoard(rawValues: string[]): BoardCase[][] {
  return rawValues.map((oneLine) => extractOneLine(oneLine));
}

export function extractBoards(rawValues: string[]): BoardCase[][][] {
  const result: BoardCase[][][] = [];
  let oneBoardAccumulator: string[] = [];
  for (let i = 2; i < rawValues.length; i++) {
    if (rawValues[i] === '') {
      result.push(extractOneBoard(oneBoardAccumulator));
      oneBoardAccumulator = [];
    } else {
      oneBoardAccumulator.push(rawValues[i]);
    }
  }
  result.push(extractOneBoard(oneBoardAccumulator));
  return result;
}

export function checkBoardIsWinner(board: BoardCase[][]): boolean {
  const isHorizontal = board.some((oneLine: BoardCase[]) =>
    oneLine.every((oneValue) => oneValue.marked)
  );
  if (isHorizontal) return true;

  let isVertical = false;
  let i = 0;
  while (i < board[0].length && !isVertical) {
    isVertical = board
      .map((oneLine: BoardCase[]) => oneLine[i])
      .every((oneValue) => oneValue.marked);
    i++;
  }
  return isVertical;
}

export function markValuesFromDrawnNumber(
  board: BoardCase[][],
  drawnNumber: number
): void {
  const foundValue = board
    .flat()
    .flat()
    .find((oneValue) => oneValue.value === drawnNumber);
  if (foundValue) {
    foundValue.marked = true;
  }
}

export function calculateScoreWinningBoard(board: BoardCase[][]): number {
  return board
    .flat()
    .flat()
    .filter((oneValue) => !oneValue.marked)
    .map((oneValue) => oneValue.value)
    .reduce((acc, value) => acc + value, 0);
}
