/**
 * Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
 *
 * @param nums array of positive integers
 */
function maxFrequencyElements(nums: number[]): number {
    const hashMap = new Map<number, number>();
    let maxFreq = 1;
    for (const num of nums) {
        if (hashMap.has(num)) {
            const current = hashMap.get(num)!;
            const next = current + 1;
            hashMap.set(num, next);
            maxFreq = Math.max(next, maxFreq);
        } else {
            hashMap.set(num, 1);
        }
    }
    let ans = 0;
    hashMap.forEach((value: number) => {
        if (value == maxFreq) {
            ans += maxFreq;
        }
    })
    return ans;
};