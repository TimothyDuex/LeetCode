/**
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:
 *
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 *
 * @param k integer
 * @param n integer
 */
function combinationSum3(k: number, n: number): number[][] {
    const ans: number[][] = [];
    // Define backtrack
    function backtrack(path: number[], sum: number) {
        if (path.length <= k) {
            if (path.length == k && sum == n) {
                ans.push([...path]);
                return;
            } else if (sum > n) {
                return;
            } else {
                for (let i = path.length > 0 ? path[path.length - 1] + 1 : 1; i < 10; i++) {
                    const copyPath = [...path];
                    copyPath.push(i);
                    backtrack(copyPath, sum + i);
                    copyPath.pop();
                }
            }
        }
    }
    // Do backtrack
    backtrack([], 0);
    // Return answer
    return ans;
};