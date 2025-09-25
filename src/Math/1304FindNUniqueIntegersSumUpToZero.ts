/**
 * Return any array containing n unique integers such that they add up to 0.
 *
 * @param n integer
 */
function sumZero(n: number): number[] {
    const ans: number[] = [];
    const half = Math.floor(n / 2);
    for (let i = half * -1; i <= half; i++) {
        if (i == 0) {
            if (n % 2 !== 0) {
                ans.push(i);
            }
            continue;
        }
        ans.push(i);
    }
    return ans;
};