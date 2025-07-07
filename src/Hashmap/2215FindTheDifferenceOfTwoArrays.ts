/**
 * Return a list answer of size 2 where:
 *
 * answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
 * answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
 *
 * @param nums1 integer array
 * @param nums2 integer array
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    const ans: number[][] = new Array(2);
    ans[0] = [];
    ans[1] = [];
    for (let num of nums1Set) {
        if (!nums2Set.has(num)) {
            ans[0].push(num);
        }
    }
    for (let num of nums2Set) {
        if (!nums1Set.has(num)) {
            ans[1].push(num);
        }
    }
    return ans;
};