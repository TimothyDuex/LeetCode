/**
 * Return the minimum path sum from top to bottom.
 *
 * @param triangle array
 */
function minimumTotal(triangle: number[][]): number {
    // Initialize
    const dp: number[][] = [...triangle];
    // Do DP
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j == 0) {
                dp[i][j] += dp[i - 1][j];
            } else if (j == triangle[i].length - 1) {
                dp[i][j] += dp[i - 1][j - 1];
            } else {
                dp[i][j] += Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }
    }
    // Return desired DP result
    return Math.min(...dp[dp.length - 1]);
};