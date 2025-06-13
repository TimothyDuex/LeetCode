/**
 * Return the size of the longest non-empty subarray containing only 1's
 * in the resulting array. Return 0 if there is no such subarray.
 *
 * You must delete one element from the array.
 *
 * @param nums binary array
 */
function longestSubarray(nums: number[]): number {
    // Initialize
    let max = 0;
    let start = 0;
    let end  = nums.indexOf(0);
    max = Math.max(end - start, max);
    // All 1s or all 0s check
    if (end == -1) {
        return nums.length - 1; // Must remove 1 zero
    } else if (nums.indexOf(1) == -1) {
        return 0; // All zeros
    }
    end += 1;
    while (end < nums.length) {
        let check: number = nums[end];
        if (check == 1) {
            max = Math.max(end - start, max);
        } else {
            if (nums[start] == 0) {
                while (nums[start] == 0 && start < end) {
                    start += 1;
                }
            } else {
                while (nums[start] == 1) {
                    start += 1;
                }
                start += 1;
            }
        }
        end = end + 1;
    }
    return max;
};