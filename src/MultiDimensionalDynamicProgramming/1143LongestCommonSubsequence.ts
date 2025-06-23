/**
 * Return the length of their longest common subsequence. If there is no common subsequence, return 0.
 *
 * @param text1 string
 * @param text2 string
 */
function longestCommonSubsequence(text1: string, text2: string): number {
    // Initialize
    const dp: number[][] = Array.from(
        Array(text1.length),
        () => Array(text2.length).fill(0)
    );
    dp[0][0] = text1.charAt(0) == text2.charAt(0) ? 1 : 0;
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], text1.charAt(i) == text2.charAt(0) ? 1 : 0);
    }
    for (let j = 1; j < dp[0].length; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], text1.charAt(0) == text2.charAt(j) ? 1 : 0);
    }
    // Fill DP Array
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1.charAt(i) == text2.charAt(j)) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    // Return Desired DP value
    return dp[dp.length-1][dp[0].length - 1];
};