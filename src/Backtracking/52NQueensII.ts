/**
 * Return the number of distinct solutions to the n-queens puzzle.
 *
 * The n-queens puzzle is the problem of placing n queens on
 * an n x n chessboard such that no two queens attack each other.
 *
 * @param n integer
 */
function totalNQueens(n: number): number {
    let ans = 0;
    function backtrack(grid: boolean[][], queensPlaced: number) {
        if (queensPlaced == n) {
            ans += 1;
            return;
        }
        for (let i = 0; i < n; i++) {
            const newGrid: boolean[][] = JSON.parse(JSON.stringify(grid));
            if (newGrid[queensPlaced][i]) {
                // Set Row to 1
                for (let j = 0; j < n; j++) {
                    newGrid[queensPlaced][j] = false;
                }
                // Set Column to 1
                for (let j = 0; j < n; j++) {
                    newGrid[j][i] = false;
                }
                // Set diagonals to 1
                // Go Down and Right
                let row = queensPlaced + 1;
                let col = i - 1;
                while (row < n && col >= 0) {
                    newGrid[row++][col--] = false;
                }
                // Go Down and Right
                row = queensPlaced + 1;
                col = i + 1;
                while (row < n && col < n) {
                    newGrid[row++][col++] = false;
                }
                // Backtrack
                backtrack(newGrid, queensPlaced + 1);
            } else {
                continue;
            }
        }
    }
    const grid = new Array<boolean[]>(n);
    for (let i = 0; i < n; i++) {
        grid[i] = new Array<boolean>(n).fill(true);
    }
    backtrack(grid, 0);
    return ans;
};