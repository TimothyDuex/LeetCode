/**
 * Find and return a peak element.
 * A peak element is an element that is strictly greater than its neighbors.
 *
 * You must write an algorithm that runs in O(log(n)) time.
 *
 * @param nums 0-indexed integer array
 */
function findPeakElement(nums: number[]): number {
    if (nums.length == 1) return 0;
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const mid = Math.floor((right+left) / 2);
        if (mid == 0 && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (mid == nums.length - 1 && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid;
        } else if (nums[mid + 1] > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};