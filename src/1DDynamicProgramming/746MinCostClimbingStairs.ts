/**
 * Return the minimum cost to reach the top of the floor.
 *
 * @param cost integer array where cost[i] is the cost of ith step on a staircase
 */
function minCostClimbingStairs(cost: number[]): number {
    // Initialize
    cost.push(0); // Top
    const dp: number[] = new Array(cost.length).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    // Fill DP Array
    for (let i = 2; i < cost.length; i++) {
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i];
    }
    // Return desired DP value
    return dp[dp.length - 1];
};