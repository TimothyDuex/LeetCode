/**
 * If an element is 0 set its entire row and column to zero.
 *
 * @param matrix m x n matrix
 */
function setZeroes(matrix: number[][]): void {
    const R = matrix.length;
    const C = matrix[0].length;
    // Set first row and col as 0's if 0 is found
    let isCol = false;
    for (let i = 0; i < R; i++) {
        if (matrix[i][0] == 0) {
            isCol = true;
        }
        for (let j = 1; j < C; j++) {
            if (matrix[i][j] == 0) {
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    // Set zeroes as needed
    for (let i = 1; i < R; i++) {
        for (let j = 1; j < C; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    // Take care of first row
    if (matrix[0][0] == 0) {
        for (let j = 0; j < C; j++) {
            matrix[0][j] = 0;
        }
    }
    // Take care of first column
    if (isCol) {
        for (let i = 0; i < R; i++) {
            matrix[i][0] = 0;
        }
    }
};