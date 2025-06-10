/**
 * Return the minimum number of operations required to convert word1 to word2.
 *
 * @param word1 string
 * @param word2 string
 */
function minDistance(word1: string, word2: string): number {
    // Initialize
    const dp: number[][] = Array.from(
        Array(word1.length + 1),
        () => Array(word2.length + 1).fill(0)
    );
     // We know the answers for the first row and column as it is all inserts
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j < dp[0].length; j++) {
        dp[0][j] = j;
    }
    // Fill in rest of dp array
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    // Return the last m x n cell value
    return dp[dp.length - 1][dp[0].length - 1];
};