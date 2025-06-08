/**
 * return a list of all unique combinations of candidates where the chosen numbers sum to target.
 *
 * @param candidates integer array
 * @param target target sum
 */
function combinationSum(candidates: number[], target: number): number[][] {
    const ans: number[][] = [];
    function backtrack(path: number[], sum: number) {
        for (let candidate of candidates) {
            if (path.length > 0 && candidate < path[path.length - 1]) {
                continue;
            }
            const newSum = sum + candidate;
            const newPath = [...path, candidate];
            if (newSum > target) {
                continue;
            } else if (newSum == target) {
                ans.push(newPath);
                continue;
            }
            backtrack(newPath, newSum);
        }
    }
    backtrack([], 0);
    return ans;
};