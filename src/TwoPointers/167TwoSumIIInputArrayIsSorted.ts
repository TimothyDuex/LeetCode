/**
 * Find two numbers such that they add up to a specific target number.
 *
 * Return the indices of the two numbers.
 * Your solution must use only constant extra space.
 *
 * @param numbers 1-indexed array of integers
 * @param target target number
 */
function twoSum(numbers: number[], target: number): number[] {
    // More optimized
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        if (numbers[low] + numbers[high] == target) {
            return [low + 1, high + 1];
        } else if (numbers[low] + numbers[high] < target) {
            low++;
        } else {
            high--;
        }
    }
    return [];
    /* Brute Force
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i + 1, j + 1];
            }
        }
    }
    return [];
     */
};