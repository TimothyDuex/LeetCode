/**
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * @param nums integer array
 * @param k steps to rotate array by
 */
function rotate(nums: number[], k: number): void {
    // Using reverses
    const stepsToRotate = k % nums.length;
    nums.reverse();
    let toReverse = nums.slice(0, stepsToRotate);
    toReverse.reverse();
    nums.splice(0, stepsToRotate, ...toReverse);
    toReverse = nums.slice(stepsToRotate, nums.length);
    toReverse.reverse();
    nums.splice(stepsToRotate, nums.length - stepsToRotate, ...toReverse);
    /*
    // Brute force
    for (let i = 0; i < stepsToRotate; i++) {
        const last = nums.pop();
        nums.unshift(last!);
    }
     */
};