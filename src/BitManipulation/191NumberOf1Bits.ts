/**
 * Returns the number of set bits in its binary representation.
 *
 * @param n positive integer
 */
function hammingWeight(n: number): number {
    let result = 0;
    while(n != 0) {
        if (n & 1) {
            result += 1;
        }
        n = n >>> 1;
    }
    return result;
};