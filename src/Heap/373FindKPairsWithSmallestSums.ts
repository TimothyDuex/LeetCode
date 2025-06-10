/**
 * Define a pair (u, v) which consists of one element from the
 * first array and one element from the second array.
 *
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with
 * the smallest sums.
 *
 * @param nums1 integer array sorted in non-decreasing order
 * @param nums2 integer array sorted in non-decreasing order
 * @param k integer
 */
function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    // Initialize stuff
    let m = nums1.length;
    let n = nums2.length;
    let ans: number[][] = [];
    const visited = new Set<string>();
    // Create Heap
    const minHeap = new HeapForArray(
        {compareFn: (a: number[], b: number[]) => a[0] < b[0]}
    );
    minHeap.push([nums1[0] + nums2[0], 0, 0]);
    visited.add('0 0');

    while (k-- > 0 && minHeap.size() > 0) {
        const top = minHeap.poll()!;
        const i = top[1];
        const j = top[2];
        ans.push([nums1[i], nums2[j]]);

        if (i + 1 < m && !visited.has(`${i+1} ${j}`)) {
            minHeap.push([nums1[i+1] + nums2[j], i+1, j]);
            visited.add(`${i+1} ${j}`);
        }
        if (j + 1 < n && !visited.has(`${i} ${j+1}`)) {
            minHeap.push([nums1[i] + nums2[j+1], i, j+1]);
            visited.add(`${i} ${j+1}`);
        }
    }

    return ans;
};