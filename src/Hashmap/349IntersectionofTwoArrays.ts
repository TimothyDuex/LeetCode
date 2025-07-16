/**
 * Return an array of their intersection.
 *
 * Each element in the result must be unique and you may return the result in any order.
 *
 * @param nums1 integer array
 * @param nums2 integer array
 */
function intersection(nums1: number[], nums2: number[]): number[] {
    const nums1Set = new Set(nums1);
    const nums2Set = new Set(nums2);
    const result = [];
    for (const num of nums1Set) {
        if (nums2Set.has(num)) {
            result.push(num);
        }
    }
    return result;
};