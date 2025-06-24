/**
 * Return the number of paths where the sum of the values along the
 * path equals targetSum.
 *
 * @param root root of binary tree
 * @param targetSum
 */
function pathSum(root: TreeNode | null, targetSum: number): number {
    let paths = 0;
    const hashMap = new Map<number, number>();
    function dfs(root: TreeNode | null, currSum: number): void {
        if (root == null) return;
        // The current prefix sum
        currSum = currSum + root.val;
        // Sum we are looking for
        if (currSum == targetSum) {
            paths += 1;
        }
        paths += hashMap.has(currSum - targetSum) ? hashMap.get(currSum - targetSum)! : 0;
        hashMap.has(currSum)
            ? hashMap.set(currSum, hashMap.get(currSum)! + 1)
            : hashMap.set(currSum, 1);
        dfs(root.left, currSum);
        dfs(root.right, currSum);
        hashMap.set(currSum, hashMap.get(currSum)! - 1);
    }
    dfs(root, 0);
    return paths;
};