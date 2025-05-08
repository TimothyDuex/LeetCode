/**
 * Given a sorted array of distinct integers and a target value,
 * return the index if the target is found. If not, return the
 * index where it would be if it were inserted in order.
 *
 * @param nums sorted array of distinct integers
 * @param target target value
 */
function searchInsert(nums: number[], target: number): number {
    let l = 0;
    let r = nums.length -1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return l;
};
