/**
 * You want to maximize your profit by choosing a single day to
 * buy one stock and choosing a different day in the future to
 * sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * @param prices prices of given stock for ith day
 */
function maxProfit(prices: number[]): number {
    let profit = 0;
    let buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        profit = Math.max(profit, prices[i] - buy);
        if(prices[i] < buy) {
            buy = prices[i];
        }
    }
    return profit;
};