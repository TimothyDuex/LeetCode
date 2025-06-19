/**
 * Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
 *
 * @param a positive integer
 * @param b positive integer
 * @param c positive integer
 */
function minFlips(a: number, b: number, c: number): number {
    let flips = 0;
    while(a > 0 || b > 0 || c > 0) {
        // Get Bits
        const aBit = a & 1;
        const bBit = b & 1;
        const cBit = c & 1;
        // Do flips if needed
        if (cBit == 1) {
            if (!(aBit || bBit)) {
                flips = flips + 1;
            }
        } else {
            if (aBit && bBit) {
                flips = flips + 2;
            } else if (aBit || bBit) {
                flips = flips + 1;
            }
        }
        // Shift everything right one bit
        a = a >> 1;
        b = b >> 1;
        c = c >> 1;
    }
    return flips;
};