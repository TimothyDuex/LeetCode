/**
 * Return the number of good nodes in the binary tree.
 *
 * A node X in the tree is named good if in the path
 * from root to X there are no nodes with a value greater than X.
 *
 * @param root root node of binary tree
 */
function goodNodes(root: TreeNode | null): number {
    let good = 0;
    function dfs(node: TreeNode | null, max: number): void {
        if (node == null) return;
        if (node.val >= max) {
            good++;
            max = node.val;
        }
        dfs(node.left, max);
        dfs(node.right, max);
    }
    dfs(root, Number.MIN_SAFE_INTEGER);
    return good;
};