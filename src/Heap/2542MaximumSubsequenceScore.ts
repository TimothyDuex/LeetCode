import {MinPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Return the maximum possible score.
 *
 * For chosen indices i0, i1, ..., ik - 1, your score is defined as:
 *
 * The sum of the selected elements from nums1 multiplied with the
 * minimum of the selected elements from nums2.
 * It can defined simply as: (nums1[i0] + nums1[i1] +...+ nums1[ik - 1])
 * * min(nums2[i0] , nums2[i1], ... ,nums2[ik - 1]).
 *
 * @param nums1 integer array of length n
 * @param nums2 integer array of length n
 * @param k subsequence size to choose from arrays
 */
function maxScore(nums1: number[], nums2: number[], k: number): number {
    // Create 2D array
    let comboArray: number[][] = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        comboArray[i] = [nums1[i], nums2[i]];
    }
    comboArray = comboArray.sort((a, b) => b[1] - a[1]);
    // Use min heap to maintain the top k elements
    const topKHeap = new MinPriorityQueue<number>();
    let topKSum = 0;
    for (let i = 0; i < k; i++) {
        topKSum += comboArray[i][0];
        topKHeap.push(comboArray[i][0]);
    }
    let ans = topKSum * comboArray[k-1][1];
    for (let i = k; i < nums1.length; i++) {
        topKSum += comboArray[i][0] - topKHeap.pop()!;
        topKHeap.push(comboArray[i][0]);
        ans = Math.max(ans, topKSum * comboArray[i][1]);
    }
    return ans;
};