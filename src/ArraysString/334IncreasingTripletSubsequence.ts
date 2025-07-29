/**
 * Return true if there exists a triple of indices (i, j, k) such that
 * i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 *
 * @param nums integer array
 */
function increasingTriplet(nums: number[]): boolean {
    let first = Number.MAX_SAFE_INTEGER;
    let second = Number.MAX_SAFE_INTEGER;
    for (const num of nums) {
        if (num <= first) {
            first = num;
        } else if (num <= second) {
            second = num;
        } else {
            return true;
        }
    }
    return false;
};