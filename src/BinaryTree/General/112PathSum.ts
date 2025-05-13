/**
 * Return true if the tree has a root-to-leaf path such that
 * adding up all the values along the path equals targetSum.
 *
 * @param root root node of tree
 * @param targetSum target value
 */
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (root == null) {
        return false;
    }
    targetSum -= root.val;
    if (targetSum == 0 && root.left == null && root.right == null) {
        return true;
    }
    return (hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum));
};