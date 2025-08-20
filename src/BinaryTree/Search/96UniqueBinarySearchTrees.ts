/**
 * return the number of structurally unique BST's
 * (binary search trees) which has exactly n nodes of
 * unique values from 1 to n.
 *
 * @param n integer
 */
function numTrees(n: number): number {
    // Initialize
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    // Do DP
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    }
    // Return desired DP value
    return dp[n];
};