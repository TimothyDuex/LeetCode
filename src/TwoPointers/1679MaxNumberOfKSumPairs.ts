/**
 * Return the maximum number of operations you can perform on the array.
 * In one operation, you can pick two numbers from the array whose sum
 * equals k and remove them from the array.
 *
 * @param nums integer array
 * @param k sum two numbers must add to
 */
function maxOperations(nums: number[], k: number): number {
    let ans = 0;
    const map = new Map<number, number>();
    for (let num of nums) {
        if (map.has(num) && map.get(num)! > 0) {
            map.set(num, map.get(num)! - 1);
            ans++;
        } else {
            if (map.has(k - num)) {
                map.set(k - num, map.get(k - num)! + 1);
            } else {
                map.set(k - num, 1);
            }
        }
    }
    return ans;
};