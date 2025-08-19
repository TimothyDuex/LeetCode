/**
 * Return the minimum number of candies you need to have
 * to distribute the candies to the children.
 *
 * You are giving candies to these children subjected to the following requirements:
 * Each child must have at least one candy.
 * Children with a higher rating get more candies than their neighbors.
 *
 * @param ratings integer array of child rating values
 */
function candy(ratings: number[]): number {
    // Instantiate
    let candies: number[] = Array(ratings.length).fill(1);
    // Traverse left to right
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }
    let sum: number = candies[candies.length - 1];
    // Traverse right to left
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
        sum += candies[i];
    }
    return sum;
}