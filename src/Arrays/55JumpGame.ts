/**
 * You are given an integer array nums. You are initially
 * positioned at the array's first index, and each element
 * in the array represents your maximum jump length at
 * that position.
 *
 * Return true if you can reach the last index, or false otherwise.
 *
 * @param nums integer array
 */
function canJump(nums: number[]): boolean {
    let lastGood = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        let furthestJump = nums[i];
        if (i + furthestJump >= lastGood) {
            lastGood = i;
        }
    }
    return lastGood == 0;
    /*
    const memo: (boolean)[] = new Array(nums.length);
    memo.fill(false, 0, memo.length - 1);
    memo[nums.length-1] = true;
    for (let i = nums.length - 2; i >= 0; i--) {
        let furthestLength = Math.min(nums[i], nums.length - 1 - i)
        for (let j = 1; j <= furthestLength; j++) {
            if (memo[i + j]) {
                memo[i] = true;
            }
        }
    }
    return memo[0];
     */
};