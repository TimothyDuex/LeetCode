/**
 * Return the length of the longest consecutive elements sequence.
 *
 * You must write an algorithm that runs in O(n) time.
 *
 * @param nums unsorted array of integers
 */
function longestConsecutive(nums: number[]): number {
    const numSet: Set<number> = new Set(nums);
    let longestStreak = 0;
    for (let num of numSet) {
        if (numSet.has(num - 1)) {
            continue;
        }
        let currentStreak = 1;
        while (numSet.has(num + 1)) {
            num += 1;
            currentStreak += 1;
        }
        longestStreak = Math.max(longestStreak, currentStreak);
    }
    return longestStreak;
};