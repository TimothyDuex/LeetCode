/**
 * Return the subtree rooted with the val node.
 *
 * @param root root node of binary tree
 * @param val val to find
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root == null) return null;
    if (root.val == val) {
        return root;
    } else {
        const left = searchBST(root.left, val);
        if (left) {
            return left;
        }
        const right = searchBST(root.right, val);
        if (right) {
            return right;
        }
    }
    return null;
};