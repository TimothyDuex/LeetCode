/**
 * Return the minimum element of the array.
 *
 * You must write an algorithm that runs in O(log n) time.
 *
 * @param nums integer array in ascending order then rotated
 */
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[nums.length - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return nums[left];
};