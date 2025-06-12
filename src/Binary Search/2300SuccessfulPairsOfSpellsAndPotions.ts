/**
 * Return an integer array pairs of length n where pairs[i] is the number of potions that will form a
 * successful pair with the ith spell.
 *
 * @param spells spells[i] represents the strength of spells[i]
 * @param potions potions[j] represents the strength of potions[j]
 * @param success strength needed from spells[i] * potions[j] to be considered success
 */
function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const ans = [];
    potions = potions.sort((a, b) => a - b);
    for (let i = 0; i < spells.length; i++) {
        let left = 0;
        let right = potions.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (spells[i] * potions[mid] >= success) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        ans.push(potions.length - left);
    }
    return ans;
};