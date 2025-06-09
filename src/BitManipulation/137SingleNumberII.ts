/**
 * Every element appears three times except for one,
 * which appears exactly once. Find the single element
 * and return it.
 *
 * @param nums integer array
 */
function singleNumber(nums: number[]): number {
    let numsSet = new Set(nums);
    let sumNums = nums.reduce((a, b) => a + b, 0);
    let sumSet = Array.from(numsSet.values()).reduce((a, b) => a + b, 0);
    return (3 * sumSet - sumNums) / 2;
}