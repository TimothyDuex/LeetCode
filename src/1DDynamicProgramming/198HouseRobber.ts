/**
 * Return the maximum amount of money you can rob tonight without alerting the police.
 * Police are alerted if adjacent houses are robbed in the same night.
 *
 * @param nums integer array representing amount of money in each house
 */
function rob(nums: number[]): number {
    if (nums.length == 0) {
        return 0;
    }
    let memo = new Array(nums.length + 1);
    memo.fill(-1);
    memo[0] = 0;
    memo[1] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const val = nums[i];
        memo[i+1] = Math.max(memo[i], memo[i-1] + val);
    }
    return memo[nums.length];
};
/*
    function robRecursive(nums: number[], i: number): number {
        if (i < 0) {
            return 0;
        }
        if (memo[i] >= 0) {
            return memo[i];
        }
        const result = Math.max(robRecursive(nums, i-2) + nums[i], robRecursive(nums, i - 1));
        memo[i] = result;
        return result;
 */