/**
 * Given n, return the value of Tn.
 *
 * @param n integer
 */
function tribonacci(n: number): number {
    // Initialize
    const dp: number[] = new Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    // Fill DP
    for (let i = 3; i < n+1; i++) {
        dp[i] = dp[i-1] + dp[i -2] + dp[i -3];
    }
    // Return DP value of interest
    return dp[n];
};