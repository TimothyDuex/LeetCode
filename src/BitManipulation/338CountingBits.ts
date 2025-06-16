/**
 * Return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 *
 * @param n integer
 */
function countBits(n: number): number[] {
    let ans: number[] = [];
    let pow = 0;
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            ans[i] = 0;
        }
        ans[i] = ans[Math.floor(i / 2)] + i % 2;
    }
    return ans;
};