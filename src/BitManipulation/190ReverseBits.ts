/**
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * @param n 32 bit unsigned integer
 */
function reverseBits(n: number): number {
    let ret = 0;
    let power = 31;
    while (n != 0) {
        ret += (n & 1) << power;
        n = n >>> 1;
        power -= 1;
    }
    return ret >>> 0;
};