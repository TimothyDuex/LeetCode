/**
 * Return the maximum possible sum of a non-empty subarray of nums.
 *
 * @param nums circular integer array
 */
function maxSubarraySumCircular(nums: number[]): number {
    let currMax = 0;
    let sumMax = nums[0];
    let currMin = 0;
    let sumMin = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        // Max subarray
        currMax = currMax + nums[i];
        sumMax = Math.max(currMax, sumMax);
        if (currMax < 0) {
            currMax = 0;
        }
        // Min subarray
        currMin = currMin + nums[i];
        sumMin = Math.min(currMin, sumMin);
        if (currMin > 0) {
            currMin = 0;
        }
        sumMin = Math.min(currMin, sumMin);
        // Total sum
        sum += nums[i];
    }
    if (sumMin == sum) {
        return sumMax;
    } else {
        return Math.max(sumMax, sum - sumMin);
    }
};