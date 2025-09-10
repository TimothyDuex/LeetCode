/**
 * Return the duplicate number in the array.
 *
 * @param nums array of integers containing n + 1 integers where each integer is in the range [1, n] inclusive.
 */
function findDuplicate(nums: number[]): number {
    while (nums[0] != nums[nums[0]]) {
        const nxt = nums[nums[0]];
        nums[nums[0]] = nums[0];
        nums[0] = nxt;
    }
    return nums[0];
};