/**
 * Return the number of islands.
 *
 * @param grid m x n binary grid. 1 represents land, 2 represents water
 */
function numIslands(grid: string[][]): number {
    let dfsTotal = 0;

    function dfs(row: number, col: number, grid: string[][]) {
        const rowN = grid.length;
        const colN = grid[0].length;
        if (
            row < 0 ||
            col < 0 ||
            row >= rowN ||
            col >= colN ||
            grid[row][col] == '0'
        ) {
            return;
        }
        grid[row][col] = '0';
        dfs(row - 1, col, grid);
        dfs(row + 1, col, grid);
        dfs(row, col - 1, grid);
        dfs(row, col + 1, grid);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == '1') {
                dfsTotal++;
                dfs(i, j, grid);
            }
        }
    }
    return dfsTotal;
};