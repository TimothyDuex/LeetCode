/**
 * Return the minimal length of a subarray whose sum is greater
 * than or equal to target. If there is no such subarray,
 * return 0 instead.
 *
 * @param target positive integer
 * @param nums array of positive integers
 */
function minSubArrayLen(target: number, nums: number[]): number {
    let solution = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            solution = Math.min(solution, right - left + 1);
            sum -= nums[left++];
        }
    }
    return solution ==  Number.MAX_SAFE_INTEGER ? 0 : solution;
};