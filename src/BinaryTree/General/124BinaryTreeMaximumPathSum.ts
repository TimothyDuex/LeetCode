/**
 * Return the maximum path sum of any non-empty path.
 *
 * @param root root node of binary tree
 */
function maxPathSum(root: TreeNode | null): number {
    let max = Number.MIN_SAFE_INTEGER;

    function pathSum(node: TreeNode | null): number {
        if (node == null) return 0;
        max = Math.max(max, node.val); // Check for standalone max
        // If leaf
        if (node.left == null && node.right == null) {
            return node.val;
        }
        const pathSumLeft = pathSum(node.left);
        const pathSumRight = pathSum(node.right);
        // Check for new max if using the subtrees
        max = Math.max(max, pathSumLeft + pathSumRight + node.val);
        // Find Max underneath and pass up
        const tempMax = Math.max(
            node.val, // Both subtrees are negative
            pathSumRight + node.val, // Right subtree is positive
            pathSumLeft + node.val, // Left subtree is positive
        );
        // Determine if tempMax is new max path
        max = Math.max(max, tempMax);
        // Pass up if positive
        return tempMax > 0 ? tempMax : 0;
    }
    pathSum(root);
    return max;
};