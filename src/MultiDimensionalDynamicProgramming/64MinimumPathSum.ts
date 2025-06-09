/**
 * Find a path from top left to bottom right, which minimizes the sum of
 * all numbers along its path.
 *
 * @param grid m x n grid of non-negative numbers
 */
function minPathSum(grid: number[][]): number {
    // Initialize
    const dp: number[][] = [...grid];
    for (let i = 0; i < grid.length; i++) {
        dp[i] = [...grid[i]];
    }
    dp[0][0] = grid[0][0];
    // Fill DP Array
    for (let i = 1; i < grid[0].length; i++) { // First Row
        dp[0][i] = grid[0][i] + dp[0][i-1];
    }
    for (let i = 1; i < grid.length; i++) { // First Col
        dp[i][0] = grid[i][0] + dp[i-1][0];
    }
    for (let i = 1; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length; j++) {
            dp[i][j] = grid[i][j] + Math.min(dp[i][j - 1], dp[i - 1][j]);
        }
    }
    // Return Last Cell
    return dp[dp.length - 1][dp[0].length - 1];
};