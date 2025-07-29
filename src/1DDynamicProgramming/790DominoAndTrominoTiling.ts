/**
 * Return the number of ways to tile an 2 x n board.
 * Since the answer may be very large, return it modulo 10^9 + 7.
 *
 * @param n integer representing n in a 2 x n size board
 */
function numTilings(n: number): number {
    // Check early exit cases
    if (n == 0) return 0;
    const initials: {[key: number]: number} = {
        0: 1,
        1: 1,
        2: 2,
        3: 5,
    };
    if (n <= 3) {
        return initials[n];
    }
    // Initialize
    const dp: number[] = new Array(n + 1);
    dp[0] = 1; // Needed for calculation
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 5;
    // Fill DP Array
    for (let i = 4; i <= n; i++) {
        dp[i] = 2 * dp[i-1] + dp[i - 3];
    }
    // Return desired DP value
    return dp[dp.length - 1] % (Math.pow(10, 9) + 7);
};