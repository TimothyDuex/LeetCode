/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * @param root root node of tree
 */
function invertTree(root: TreeNode | null): TreeNode | null {
    // Null Check
    if (root == null) {
        return null;
    }
    // Recursively reverse branches
    invertTree(root?.left);
    invertTree(root?.right)
    // Do the actual reverse, or in plain english, swap the nodes
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};