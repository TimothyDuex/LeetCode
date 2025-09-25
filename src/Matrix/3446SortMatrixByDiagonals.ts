/**
 * Return the matrix such that:
 *
 * The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
 * The diagonals in the top-right triangle are sorted in non-decreasing order.
 *
 * @param grid n x n square matrix
 */
function sortMatrix(grid: number[][]): number[][] {
    // Loop through the bottom left diagonals
    for (let r = 0; r < grid.length; r++) {
        const temp: number[] = [];
        // Grab diagonal
        for (let i = 0; i <= r; i++) {
            temp.push(grid[grid.length - 1 - r + i][i]);
        }
        // Sort diagonal
        temp.sort((a, b) => b - a);
        // Replace diagonal
        for (let i = 0; i <= r; i++) {
            grid[grid.length - 1 - r + i][i] = temp[i];
        }
    }
    // Loop through the top right diagonals
    for (let c = 0; c < grid.length - 1; c++) {
        const temp: number[] = [];
        // Grab diagonal
        for (let i = 0; i <= c; i++) {
            temp.push(grid[i][grid.length - 1 - c + i]);
        }
        // Sort diagonal
        temp.sort((a, b) => a - b);
        // Replace diagonal
        for (let i = 0; i <= c; i++) {
            grid[i][grid.length - 1 - c + i] = temp[i];
        }
    }
    return grid;
};