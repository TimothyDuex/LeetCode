/**
 * Given the array nums after the possible rotation and an integer
 * target, return the index of target if it is in nums, or -1
 * if it is not in nums.
 *
 * @param nums integer array sorted in ascending order with distinct values
 * @param target target integer to find
 */
function search(nums: number[], target: number): number {
    const n = nums.length;
    // First find pivot
    let left = 0;
    let right = n - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[n - 1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    const pivot = left;
    left = 0;
    right = n - 1;
    // Then Binary Search with Pivot
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[(mid + pivot) % n] == target) {
            return (mid + pivot) % n;
        } else if (nums[(mid + pivot) % n] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};