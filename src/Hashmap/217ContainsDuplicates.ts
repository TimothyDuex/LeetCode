/**
 * Return true if any value appears at least twice in the array.
 *
 * @param nums integer array
 */
function containsDuplicate(nums: number[]): boolean {
    const set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};