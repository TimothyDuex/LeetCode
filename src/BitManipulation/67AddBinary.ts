/**
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * @param a first input binary string
 * @param b second input binary string
 */
function addBinary(a: string, b: string): string {
    let x = BigInt(`0b${a}`);
    let y = BigInt(`0b${b}`);
    while (y) {
        let answer = x ^ y;
        let carry = (x & y) << BigInt(1);
        x = answer;
        y = carry;
    }
    return x.toString(2);
}