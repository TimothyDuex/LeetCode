/**
 * On each day, you may decide to buy and/or sell the stock.
 * You can only hold at most one share of the stock at any
 * time. However, you can buy it then immediately sell it on
 * the same day.
 *
 * Find and return the maximum profit you can achieve.
 *
 * @param prices prices of given stock for ith day
 */
function maxProfit(prices: number[]): number {
    let totalProfit = 0;
    let buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const profit = prices[i] - buy;
        if (profit > 0) {
            totalProfit += profit;
            buy = prices[i];
        } else if(prices[i] < buy) {
            buy = prices[i];
        }
    }
    return totalProfit;
};