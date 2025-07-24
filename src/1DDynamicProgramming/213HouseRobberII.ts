/**
 * Return the maximum amount of money you can rob tonight without alerting the police.
 *
 * The houses are arranged in a circle. So the last house is a neighbor of the first house.
 *
 * @param nums integer representing the amount of money of each house
 */
function rob(nums: number[]): number {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    function houseRob(nums: number[]): number {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        // Initialize
        const dp = new Array(nums.length).fill(0);
        dp[0] = nums[0];
        dp[1] = Math.max(dp[0], nums[1]);
        // Fill DP Array
        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }
        // Return desired dp value
        return dp[dp.length - 1];
    }
    return Math.max(
        houseRob(nums.slice(0, nums.length - 1)),
        houseRob(nums.slice(1)),
    );
};