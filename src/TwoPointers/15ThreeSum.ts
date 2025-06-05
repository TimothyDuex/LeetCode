/**
 * Return all triplets such that all 3 integers are unique and sum to 0.
 *
 * @param nums integer array
 */
function threeSum(nums: number[]): number[][] {
    // Sort Nums
    nums = nums.sort((a, b) => a - b);
    // Use adjusted Two Sum solution
    const triplets: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        const target = 0 - nums[i];
        let low = i + 1;
        let high = nums.length - 1;
        while (low < high) {
            if (nums[low] + nums[high] == target) {
                triplets.push([nums[i], nums[low++], nums[high--]]);
                while (low < high && nums[low] == nums[low - 1]) {
                    low++
                }
            } else if (nums[low] + nums[high] < target) {
                low++;
            } else {
                high--;
            }
        }
        while (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            i++;
        }
    }
    return triplets;
};