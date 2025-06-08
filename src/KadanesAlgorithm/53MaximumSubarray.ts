/**
 * Find the subarray with the largest sum, and return its sum.
 *
 * @param nums integer array
 */
function maxSubArray(nums: number[]): number {
    let current = 0;
    let max = nums[0];
    for(let num of nums) {
        current += num;
        if(current > max) {
            max = current;
        }
        if (current <= 0) {
            current = 0;
        }
    }
    return max;
};