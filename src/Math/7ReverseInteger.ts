/**
 * Return x with its digits reversed.
 *
 * @param x signed integer
 */
function reverse(x: number): number {
    let negative = false;
    if (x < 0) {
        x = x * -1;
        negative = true;
    }
    let ans: number = 0;
    while (x > 0) {
        const remainder = x % 10;
        ans *= 10;
        ans += remainder;
        x = Math.floor(x / 10);
    }
    return negative ? ans * -1 : ans;
};