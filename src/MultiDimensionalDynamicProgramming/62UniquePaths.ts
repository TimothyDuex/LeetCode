/**
 * Return the number of possible unique paths that the robot
 * can take to reach the bottom-right corner.
 *
 * @param m rows in grid
 * @param n columns in grid
 */
function uniquePaths(m: number, n: number): number {
    // Initialize
    const dp: number[][] = new Array(m).fill(new Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    for (let j = 0; j < m; j++) {
        dp[j][0] = 1;
    }
    // Fill DP Grid
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    // Return desired DP value
    return dp[m-1][n-1];
};