/**
 * Return the number of people who know the secret at the end of the day n.
 * Return in modulo 10^9 + 7.
 *
 * A person cannot share the secret on the same day they forgot it, or on any day afterwards.
 *
 * @param n integer
 * @param delay each person will share teh secret with a new person every day starting from this integer
 * @param forget each person will forget the secret this integer in days after discovering it
 */
function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const MOD = 1000000007;
    const know: number[][] = []; // [day, cnt]
    const share: number[][] = []; // [day, cnt]
    know.push([1, 1]);
    let knowCnt = 1;
    let shareCnt = 0;

    for (let i = 2; i <= n; i++) {
        if (know.length > 0 && know[0][0] === i - delay) {
            const first = know.shift()!;
            knowCnt = (knowCnt - first[1] + MOD) % MOD;
            shareCnt = (shareCnt + first[1]) % MOD;
            share.push(first);
        }
        if (share.length > 0 && share[0][0] === i - forget) {
            const first = share.shift()!;
            shareCnt = (shareCnt - first[1] + MOD) % MOD;
        }
        if (share.length > 0) {
            knowCnt = (knowCnt + shareCnt) % MOD;
            know.push([i, shareCnt]);
        }
    }
    return (knowCnt + shareCnt) % MOD;
}
