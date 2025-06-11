/**
 * Return the longest ZigZag path contained in the tree.
 *
 * @param root root node of binary tree
 */
function longestZigZag(root: TreeNode | null): number {
    if (root === null) return -1;
    let ans = 0;

    /**
     * @param prevDirection false for left, true for right
     */
    function longestZigZagWithLevel(root: TreeNode | null, prevDirection: boolean, level: number) {
        if (root === null) {
            ans = Math.max(level, ans);
            return;
        }
        if (prevDirection) {
            // Continue case
            longestZigZagWithLevel(root.left, false, level + 1);
            // For any node case
            longestZigZagWithLevel(root.right, true, 0);
        } else {
            // Continue case
            longestZigZagWithLevel(root.left, false, 0);
            // For any node case
            longestZigZagWithLevel(root.right, true, level + 1);
        }
    }
    longestZigZagWithLevel(root.left, false, 0);
    longestZigZagWithLevel(root.right, true, 0);
    return ans;
};