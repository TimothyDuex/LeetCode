/**
 * Return the fraction in string format.
 *
 * @param numerator integer
 * @param denominator integer
 */
function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator === 0) {
        return "0";
    }
    const ans = [];
    if (
        (numerator < 0 && denominator >= 0) ||
        (numerator >= 0 && denominator < 0)
    ) {
        ans.push("-");
    }
    const dividend = Math.abs(numerator);
    const divisor = Math.abs(denominator);
    ans.push(Math.floor(dividend / divisor).toString());
    let remainder = dividend % divisor;
    // No remainder, can return
    if (remainder === 0) {
        return ans.join("");
    }
    ans.push(".");
    const map = new Map<number, number>();
    while (remainder !== 0) {
        if (map.has(remainder)) {
            ans.splice(map.get(remainder) as number, 0, "(");
            ans.push(")");
            break;
        }
        map.set(remainder, ans.length);
        remainder *= 10;
        ans.push(Math.floor(remainder / divisor).toString());
        remainder %= divisor;
    }
    return ans.join("");
}