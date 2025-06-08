/**
 * Find starting and ending position of a given target value.
 *
 * @param nums sorted array in ascending order
 * @param target target value
 */
function searchRange(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length;
    let found = false;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] == target) {
            found = true;
            left = mid;
            right = mid;
            break;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (found) {
        while(left > 0) {
            if(nums[left - 1] == target) {
                left = left - 1;
            } else {
                break;
            }
        }
        while(right < nums.length) {
            if(nums[right + 1] == target) {
                right = right + 1;
            } else {
                break;
            }
        }
        return [left, right];
    } else {
        return [-1, -1];
    }
};