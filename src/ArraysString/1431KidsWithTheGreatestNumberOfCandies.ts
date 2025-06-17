/**
 * Return a boolean array result of length n, where result[i] is true if, after
 * giving the ith kid all the extraCandies, they will have the greatest number
 * of candies among all the kids, or false otherwise.
 *
 * @param candies integer array where each candies[i] represents the number of candies the ith kid has
 * @param extraCandies number of extra candies you have
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const max = candies.reduce((acc, cur) => Math.max(acc, cur), 0);
    return candies.map(a => a + extraCandies >= max);
};