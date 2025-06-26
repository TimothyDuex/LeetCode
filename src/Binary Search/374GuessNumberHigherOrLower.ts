/**
 * Return the number that is picked from 1 to n.
 *
 * Using pre-defined api guess that returns higher, lower, or equal to.
 *
 * @param n integer
 */
function guessNumber(n: number): number {
    let low = 0;
    let high = n;
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const result = guess(mid);
        if (result == 0) {
            return mid;
        } else if (result == 1) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Should never hit
};

// Don't include in answer on website, just here to fix errors in file
function guess(num: number): number {
    return 1;
}