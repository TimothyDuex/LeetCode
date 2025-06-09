/**
 * Every element appears twice except for one. Find that single one.
 *
 * @param nums non-empty array of integers
 */
function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
        result = result ^ num;
    }
    return result;
};