/**
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element
 * appears at most twice. The relative order of the elements
 * should be kept the same.
 *
 * @param nums integer array sorted in increasing order
 */
function removeDuplicates(nums: number[]): number {
    let w = 1;
    let currentElementCount = 1;
    for(let r = 1; r < nums.length; r++) {
        // If not over max unique element count can write to array
        if (nums[r] === nums[w-1]) {
            currentElementCount++;
            if (currentElementCount <= 2) {
                nums[w++] = nums[r];
            }
        } else {
            nums[w++] = nums[r];
            currentElementCount = 1;
        }
    }

    return w;
};