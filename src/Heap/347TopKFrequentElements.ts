import {MaxPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Return the k most frequent elements.
 *
 * @param nums integer array
 * @param k number of most frequent elements to return
 */
function topKFrequent(nums: number[], k: number): number[] {
    // Build HashMap
    const hashMap = new Map<number, number>();
    for (const num of nums) {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num)! + 1);
        } else {
            hashMap.set(num, 1);
        }
    }
    // Build Heap with custom comparison function
    const maxHeap = new MaxPriorityQueue<[number, number]>(entry => entry[1]);
    for (const [key, value] of hashMap.entries()) {
        maxHeap.push([key, value]);
    }
    const result: number[] = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.pop()![0]);
    }
    return result;
};