/**
 * Given a non-negative integer x, return the square root of x
 * rounded down to the nearest integer. The returned integer
 * should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 * @param x input number to find sqrt of
 */
function mySqrt(x: number): number {
    let left = 0;
    let right = x;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid < x) {
            left = mid + 1;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return right;
};