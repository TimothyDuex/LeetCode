/**
 * Return the median array for each window in the original array.
 *
 * @param nums integer array
 * @param k size of sliding window
 */
function medianSlidingWindow(nums: number[], k: number): number[] {
    const window: number[] = [];
    const results: number[] = [];

    function findMedian(numArray: number[]) {
        const sortedNumArray = [...numArray].sort((a, b) => a - b);
        const middle = Math.floor(sortedNumArray.length / 2);
        if (sortedNumArray.length % 2 == 0) { // Even
            return (sortedNumArray[middle] + sortedNumArray[middle - 1]) / 2;
        } else { // Odd
            return sortedNumArray[middle];
        }
    }
    for (let i = 0; i < nums.length; i++) {
        window.push(nums[i]);
        if (window.length == k) {
            results[i - k + 1] = findMedian(window);
            window.shift();
        }
    }
    return results;
};