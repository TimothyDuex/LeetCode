import {MinPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Return the minimum time it takes for all the n nodes to receive the signal. If it is
 * impossible for all the n nodes to receive the signal, return -1.
 *
 * @param times times[i] = (ui, vi, wi), where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target
 * @param n number of nodes
 * @param k starting signal node
 */
function networkDelayTime(times: number[][], n: number, k: number): number {
    // Create Map of Times
    const timeMap = new Map<number, number[][]>();
    for(const [src, target, time] of times) {
        if (timeMap.has(src)) {
            const newTimeMap = timeMap.get(src)!;
            newTimeMap.push([target, time]);
            timeMap.set(src, newTimeMap);
        } else {
            timeMap.set(src, [[target, time]]);
        }
    }
    // Do Dijkstra
    const v: boolean[] = new Array(n+1).fill(false);
    v[0] = true;
    const d: number[] = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
    const minHeap = new MinPriorityQueue<[number, number]>(entry => entry[1]);
    minHeap.push([k, 0]);
    while (!minHeap.isEmpty()) {
        const [node, elapsedTime] = minHeap.pop()!;
        if (!v[node]) {
            v[node] = true;
            if (v.every(entry => entry == true)) {
                return elapsedTime;
            }
            if (timeMap.has(node)) {
                for (const entry of timeMap.get(node)!) {
                    const target = entry[0];
                    const travelTime = entry[1];
                    const totalTime = travelTime + elapsedTime;
                    if (totalTime < d[target]) {
                        d[target] = totalTime;
                        minHeap.push([target, totalTime]);
                    }
                }
            }
        }
    }
    return -1;
};