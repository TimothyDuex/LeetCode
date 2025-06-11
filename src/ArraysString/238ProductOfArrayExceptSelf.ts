/**
 * Return an array answer such that answer[i] is equal to the
 * product of all the elements of nums except nums[i].
 *
 * You must write an algorithm that runs in O(n) time and without
 * using the division operation.
 *
 * @param nums integer array
 */
function productExceptSelf(nums: number[]): number[] {
    const leftToRight = new Array(nums.length);
    leftToRight.fill(1);
    leftToRight[0] = nums[0];
    const rightToLeft = new Array(nums.length);
    rightToLeft.fill(1);
    rightToLeft[nums.length - 1] = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        leftToRight[i] = leftToRight[i-1] * nums[i];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        rightToLeft[i] = rightToLeft[i+1] * nums[i];
    }
    const solution = new Array(nums.length);
    solution.fill(1);
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && i < nums.length - 1) {
            solution[i] = leftToRight[i - 1] * rightToLeft[i + 1];
        } else if (i == 0) {
            solution[i] = rightToLeft[i + 1];
        } else if (i == nums.length - 1) {
            solution[i] = leftToRight[i - 1];
        }
    }
    return solution;
};