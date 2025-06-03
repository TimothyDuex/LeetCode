/**
 * Return all possible combinations of k numbers chosen in the range [1,n].
 *
 * @param n integer n
 * @param k integer k
 */
function combine(n: number, k: number): number[][] {
    let combinations: number[][] = [];

    function backtrack(i: number, path: number[]) {
        if (path.length == k) {
            combinations.push([...path]);
            return;
        }
        for (let j = i; j <= n; j++) {
            path.push(j);
            backtrack(j+1, path);
            path.pop();
        }
    }

    backtrack(1, []);
    return combinations;
};