/**
 * Return the length of the longest strictly increasing subsequence.
 *
 * @param nums integer array
 */
function lengthOfLIS(nums: number[]): number {
    // Initialize
    const dp = new Array(nums.length);
    dp.fill(1);
    // Fill DP Array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    // Find max within dp array
    let max = 1;
    for (let d of dp) {
        max = Math.max(d, max)
    }
    return max;
};