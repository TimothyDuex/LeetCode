import {MinPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Return the total cost to hire exactly k workers.
 *
 * You will run k sessions and hire exactly one worker in each session.
 * In each hiring session, choose the worker with the lowest cost from either the first
 * candidates workers or the last candidates workers. Break the tie by the smallest index.
 *
 * @param costs integer array where costs[i] is the cost of hiring the ith worker.
 * @param k number of candidates to hire
 * @param candidates integer
 */
function totalCost(costs: number[], k: number, candidates: number): number {
    const minHeap = new PriorityQueue<number[]>((a, b) => {
        if (a[0] != b[0]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    let totalCost = 0;
    let ptr1 = -1;
    let ptr2 = costs.length;
    // First Round
    for (let i = 0; i < candidates; i++) {
        if (minHeap.size() < costs.length) {
            ptr1++;
            minHeap.push([costs[ptr1], ptr1]);
        }
        if (minHeap.size() < costs.length) {
            ptr2--;
            minHeap.push([costs[ptr2], ptr2]);
        }
    }
    let hired: number[] = minHeap.pop()!;
    totalCost += hired[0];
    // Other Rounds
    for (let i = 1; i < k; i++) {
        // Find index of last hire
        const indexOfHired = hired[1];
        // Determine next candidate to add
        if (minHeap.size() < costs.length - i) {
            if (indexOfHired <= ptr1) {
                ptr1++
                minHeap.push([costs[ptr1], ptr1]);
            } else {
                ptr2--;
                minHeap.push([costs[ptr2], ptr2]);
            }
        }
        // Make Hire
        hired = minHeap.pop()!;
        totalCost += hired[0];
    }
    // Return total cost
    return totalCost;
};