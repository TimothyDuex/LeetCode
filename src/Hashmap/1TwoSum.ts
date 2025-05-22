/**
 * Return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * @param nums array of integers
 * @param target integer target
 */
function twoSum(nums: number[], target: number): number[] {
    const hashMap = new Map<number, number>();
    for (const [index, value] of nums.entries()) {
        if (hashMap.has(value)) {
            const firstIndex = hashMap.get(value);
            return [firstIndex!, index];
        } else {
            hashMap.set(target - value, index);
        }
    }
    return [0,0];
};