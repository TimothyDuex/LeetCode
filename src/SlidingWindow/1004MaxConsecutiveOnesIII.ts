/**
 * Return the maximum number of consecutive 1's in the array if
 * you can flip at most k 0's.
 *
 * @param nums binary array
 * @param k integer
 */
function longestOnes(nums: number[], k: number): number {
    let max = 0;
    let ptr1 = 0;
    let ptr2 = 0;
    let s = [];
    // Find starting window
    while(ptr2 < nums.length && s.length < k) {
        if (nums[ptr2] == 0) {
            s.push(ptr2);
        }
        max = Math.max(max, ptr2 - ptr1 + 1);
        ptr2++;
    }
    // Traverse rest of array and move window
    while(ptr2 < nums.length) {
        if (nums[ptr2] == 0) {
            s.push(ptr2);
            ptr1 = s.shift()! + 1;
        }
        max = Math.max(max, ptr2 - ptr1 + 1);
        ptr2++;
    }
    return max;
};