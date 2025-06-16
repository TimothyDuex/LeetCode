/**
 * Calculate the pivot index of this array.
 *
 * The pivot index is the index where the sum of all the numbers
 * strictly to the left of the index is equal to the sum of all
 * the numbers strictly to the index's right.
 *
 * @param nums integer array
 */
function pivotIndex(nums: number[]): number {
    const totalSum = nums.reduce((acc, cur) => acc + cur, 0);
    let leftSum = 0;
    let rightSum = totalSum;
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            rightSum = rightSum - nums[i];
        } else {
            rightSum = rightSum - nums[i];
            leftSum = leftSum + nums[i - 1];
        }
        if (leftSum == rightSum) {
            return i;
        }
    }
    return -1;
};