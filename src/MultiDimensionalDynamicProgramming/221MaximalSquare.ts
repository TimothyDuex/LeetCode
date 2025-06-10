/**
 * Find the largest square containing only 1's and return its area.
 *
 * @param matrix m x n binary matrix
 */
function maximalSquare(matrix: string[][]): number {
    // Initialize
    const dp: number[][] = Array.from(
        Array(matrix.length),
        () => Array(matrix[0].length).fill(0)
    );
    let max = 0;
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = Number(matrix[i][0]);
        max = Math.max(max, dp[i][0]);
    }
    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = Number(matrix[0][j]);
        max = Math.max(max, dp[0][j]);
    }
    // Fill DP array
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (matrix[i][j] == '1') {
                dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
            } else {
                dp[i][j] = 0;
            }
            max = Math.max(max, dp[i][j]);
        }
    }
    // Return DP value representing max square
    return max * max;
};