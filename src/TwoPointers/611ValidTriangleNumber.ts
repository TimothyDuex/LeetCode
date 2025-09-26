/**
 * Return the number of triplets chosen from the array that can make triangles
 * if we take them as side lengths of a triangle.
 *
 * @param nums integer array
 */
function triangleNumber(nums: number[]): number {
    nums = nums.sort((a,b) => a - b);
    if (nums.length == 1 || nums.length == 2) {
        return 0;
    }
    let ans: number = 0;
    for (let l = 0; l < nums.length - 2; l++) {
        for (let r = l + 1; r < nums.length - 1; r++) {
            let t = r + 1;
            while (t < nums.length && nums[l] + nums[r] > nums[t]) {
                ans++;
                t++;
            }
        }
    }
    return ans;
};