/**
 * Return the minimum number of jumps to reach nums[n - 1].
 * The test cases are generated such that you can reach nums[n - 1].
 *
 * @param nums each index represents the max length a forward jump from the index
 */
function jump(nums: number[]): number {
    // Greedy
    let answer = 0
    let n = nums.length;
    let curEnd = 0;
    let curFar = 0;
    for (let i = 0; i < n - 1; i++) {
        // Update the farthest reachable index of this jump.
        curFar = Math.max(curFar, i + nums[i]);
        // If we finish the starting range of this jump,
        // Move on to the starting range of the next jump.
        if (i === curEnd) {
            answer++;
            curEnd = curFar;
        }
    }
    return answer;
    /*
    // Bottom Up DP
    const memo: number[] = new Array(nums.length);
    // nums[i] is garuanteed to be less than or equal to 1000
    // So we can fill unfilled values with 1001
    memo.fill(1001, 0, memo.length - 1);
    memo[nums.length - 1] = 0;
    for (let i = nums.length - 2; i >= 0; i--) {
        let furthestLength = Math.min(nums[i], nums.length - 1 - i)
        for (let j = 1; j <= furthestLength; j++) {
            if (memo[i + j] <= 1000) {
                memo[i] = Math.min(memo[i], 1 + memo[i + j]);
            }
        }
    }
    return memo[0];
     */
};