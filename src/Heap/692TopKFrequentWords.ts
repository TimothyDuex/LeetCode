import {ICompare, MaxPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Retun the k most frequest strings.
 *
 * @param words string array
 * @param k number of most words to return
 */
function topKFrequent(words: string[], k: number): string[] {
    // Build HashMap
    const hashMap = new Map<string, number>();
    for (const word of words) {
        if (hashMap.has(word)) {
            hashMap.set(word, hashMap.get(word)! + 1);
        } else {
            hashMap.set(word, 1);
        }
    }
    // Build Heap with custom comparison function
    const compareWords: ICompare<[string, number]> = (a, b) => {
        // Compare by number
        if (a[1] != b[1]) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    };

    const maxHeap = new PriorityQueue<[string, number]>(compareWords);
    for (const [key, value] of hashMap.entries()) {
        maxHeap.push([key, value]);
    }
    let result: string[] = [];
    for (let i = 0; i < k; i++) {
        result.push(maxHeap.pop()![0]);
    }
    return result;
};