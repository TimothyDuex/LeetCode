/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let r1: number = m-1;
    let r2: number = n-1;

    for (let w = m + n - 1; w >= 0; w--) {
        if (r1 >= 0 && r2 >= 0) {
            nums1[w] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--];
        } else if (r1 >= 0) {
            nums1[w] = nums1[r1--];
        } else {
            nums1[w] = nums2[r2--];
        }
    }

    return;
};