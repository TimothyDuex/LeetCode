/**
 * Find the maximum profit you can achieve. You may complete as many transactions
 * as you like, but you need to pay the transaction fee for each transaction.
 *
 * @param prices array where prices[i] is the price of a given stock on the ith day
 * @param fee integer representing transaction fee
 */
function maxProfit(prices: number[], fee: number): number {
    // Initialize
    let free = 0;
    let hold = 0 - prices[0];
    // Fill DP Arrays
    for (let i = 1; i < prices.length; i++) {
        const temp = free;
        free = Math.max(free, hold + prices[i] - fee);
        hold = Math.max(hold, temp - prices[i]);
    }
    // Return desired DP result
    return free;
};