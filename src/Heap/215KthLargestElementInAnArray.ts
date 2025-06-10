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
    const minHeap = new Heap({
        compareFn: (a: number, b: number) => a < b
    });

    for (let num of nums) {
        minHeap.push(num);
    }
    while(minHeap.size() > k) {
        minHeap.poll();
    }
    return minHeap.poll()!;
};