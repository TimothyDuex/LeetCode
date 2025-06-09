/**
 * Return the number of possible unique paths that the robot can take to
 * reach the bottom-right corner.
 *
 * An obstacle and space are marked as 1 or 0 respectively in grid.
 * A path that the robot takes cannot include any square that is an obstacle.
 *
 * @param obstacleGrid m x n integer array
 */
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    // Obstacle Check
    if (obstacleGrid[0][0] == 1) {
        return 0;
    }
    // Initialize
    const dp: number[][] = [...obstacleGrid];
    for (let i = 0; i < obstacleGrid.length; i++) {
        dp[i] = [...obstacleGrid[i]];
    }
    dp[0][0] = 1;
    // Fill DP Array
    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (obstacleGrid[i][j] == 1) {
                dp[i][j] = 0;
            }
            else if (j > 0 && i > 0) {
                dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            } else if (i < 1 && j < 1) {
                continue;
            } else if (j < 1) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    // Return Last Cell
    return dp[dp.length - 1][dp[0].length - 1];
};