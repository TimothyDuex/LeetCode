/**
 * Return the minimum path sum from top to bottom.
 *
 * @param triangle array
 */
function minimumTotal(triangle: number[][]): number {
    // Initialize
    const dp: number[][] = [...triangle];
    for (let i = 0; i < triangle.length; i++) {
        dp[i] = [...triangle[i]];
    }
    dp[0][0] = triangle[0][0];
    // Fill dp array
    for (let r = 1; r < triangle.length; r++) {
        for (let c = 0; c < triangle[r].length; c++) {
            if (c == 0) {
                dp[r][c] = triangle[r][c] + dp[r - 1][c];
            } else if (c == triangle[r].length - 1) {
                dp[r][c] = triangle[r][c] + dp[r - 1][c - 1];
            } else {
                dp[r][c] = triangle[r][c] + Math.min(dp[r - 1][c], dp[r - 1][c - 1]);
            }
        }
    }
    // Return min from last row of dp
    let min = Number.MAX_SAFE_INTEGER;
    for (let val of dp[triangle.length - 1]) {
        min = Math.min(min, val);
    }
    return min;
};