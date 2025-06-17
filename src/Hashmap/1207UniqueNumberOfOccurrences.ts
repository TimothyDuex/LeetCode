/**
 * Return true if the number of occurrences of each value in the array
 * is unique or false otherwise.
 *
 * @param arr integer array
 */
function uniqueOccurrences(arr: number[]): boolean {
    const hashMap = new Map<number, number>;
    for (let num of arr) {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num)! + 1);
        } else {
            hashMap.set(num, 1);
        }
    }
    const set = new Set();
    for (let value of hashMap.values()) {
        if (set.has(value)) {
            return false;
        } else {
            set.add(value);
        }
    }
    return true;
};