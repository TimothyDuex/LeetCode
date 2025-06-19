/**
 * Move all 0's to the end of nums while maintaining the relative
 * order of the non-zero elements.
 *
 * Do not return anything, modify nums in-place instead.
 *
 * @param nums integer array
 */
function moveZeroes(nums: number[]): void {
    let ptr1 = 0;
    let ptr2 = 0;
    while (ptr2 < nums.length) {
        if (nums[ptr2] != 0) {
            let temp = nums[ptr1];
            nums[ptr1] = nums[ptr2];
            nums[ptr2] = temp;
            ptr1++;
        }
        ptr2++;
    }
};