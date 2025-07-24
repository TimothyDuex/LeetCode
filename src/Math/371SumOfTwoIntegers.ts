/**
 * Return the sumt of the two integers without using the operators + and -.
 *
 * @param a integer
 * @param b integer
 */
function getSum(a: number, b: number): number {
    let xor = a ^ b;
    let carry = a & b;
    carry <<= 1;
    while (carry) {
        const temp = xor;
        xor = xor ^ carry;
        carry = carry & temp;
        carry <<= 1;
    }
    return xor;
};