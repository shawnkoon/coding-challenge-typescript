/**
 * Spiral Matrix
 *
 * Create function that accepts a positive integer N.
 * And creates NxN spiral Matrix and returns it.
 *
 * ex)
 *
 * createSpiralMatrix(2);
 * [[1,2],
 *  [4,3]]
 *
 * createSpiralMatrix(3);
 * [[1,2,3],
 *  [8,9,4],
 *  [7,6,5]]
 *
 * createSpiralMatrix(4);
 * [[ 1, 2, 3, 4],
 *  [12,13,14, 5],
 *  [11,16,15, 6],
 *  [10, 9, 8, 7]]
 *
 * createSpiralMatrix(5);
 * [[ 1, 2, 3, 4, 5],
 *  [16,17,18,19, 6],
 *  [15,24,25,20, 7],
 *  [14,23,22,21, 8],
 *  [13,12,11,10, 9]]
 */

export const createSpiralMatrix = (n: number): number[][] => {
  const result: number[][] = new Array(n);
  let count: number = 1;
  let row = 0;
  let col = 0;

  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }

  result[row][col] = count++;

  while (true) {
    // East
    while (col + 1 < n && !result[row][col + 1]) {
      result[row][++col] = count++;
    }
    // South
    while (row + 1 < n && !result[row + 1][col]) {
      result[++row][col] = count++;
    }
    // West
    while (col - 1 >= 0 && !result[row][col - 1]) {
      result[row][--col] = count++;
    }
    // North
    while (row - 1 >= 0 && !result[row - 1][col]) {
      result[--row][col] = count++;
    }

    // Base Case
    if (count > n * n) {
      break;
    }
  }

  return result;
};
