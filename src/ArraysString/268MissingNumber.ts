/**
 * Return the only number in the range that is missing from the array.
 *
 * @param nums distinct number array from zero to length n
 */
function missingNumber(nums: number[]): number {
    const set = new Set<number>();
    for (let num of nums) {
        set.add(num);
    }
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return -1;
};