/**
 * Find a subarray that has the largest product, and return the product.
 *
 * @param nums integer array
 */
function maxProduct(nums: number[]): number {
    let max: number = nums[0];
    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const tempMax = Math.max(nums[i], nums[i] * maxSoFar, nums[i] * minSoFar);
        minSoFar = Math.min(nums[i], nums[i] * maxSoFar, nums[i] * minSoFar);
        maxSoFar = tempMax;
        max = Math.max(maxSoFar,  max);
    }
    return max;
};