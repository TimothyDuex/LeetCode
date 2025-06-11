/**
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 *
 * If the pile has less than k bananas, she eats all of them instead and will not eat
 * any more bananas during this hour.
 *
 * @param piles the ith pile has piles[i] bananas
 * @param h hours until guards come back
 */
function minEatingSpeed(piles: number[], h: number): number {
    let left = 1;
    let right = Math.max(...piles);
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const hoursTaken: number = piles.reduce((prev, current) => prev + Math.ceil(current / mid), 0);
        if (hoursTaken <= h) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};