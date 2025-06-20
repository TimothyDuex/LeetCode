/**
 * Find a contiguous subarray whose length is equal to k that
 * has the maximum average value and return this value.
 *
 * Any answer with a calculation error less than 10-5 will be accepted.
 *
 * @param nums integer array
 * @param k integer
 */
function findMaxAverage(nums: number[], k: number): number {
    let kArraySum: number = 0;
    for (let i = 0; i < k; i++) {
        kArraySum += nums[i];
    }
    let max = kArraySum / k;
    for (let i = k; i < nums.length; i++) {
        kArraySum = kArraySum - nums[i - k] + nums[i];
        max = Math.max(max, kArraySum / k);
    }
    return max;
};