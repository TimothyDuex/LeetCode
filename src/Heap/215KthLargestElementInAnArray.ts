import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Return the kth largest element in the array.
 *
 * Note that it is the kth largest element in the sorted order,
 * not the kth distinct element.
 *
 * Solve it without sorting?
 *
 * @param nums integer array
 * @param k integer
 */
function findKthLargest(nums: number[], k: number): number {
    const maxQueue = MaxPriorityQueue.fromArray<number>(nums);
    for (let i = 1; i < k; i++) {
        maxQueue.dequeue();
    }
    return maxQueue.dequeue()!;
};