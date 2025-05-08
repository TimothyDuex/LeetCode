/**
 * Given the root of a binary tree, return its maximum depth.
 *
 * @param root root node of tree
 */
function maxDepth(root: TreeNode | null): number {
    return root == null ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
