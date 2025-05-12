/**
 * Given the root of a binary tree, check whether it is a mirror
 * of itself (i.e., symmetric around its center).
 *
 * @param root root node of the tree
 */
function isSymmetric(root: TreeNode | null): boolean {
    return isMirror(root, root);
}

function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
    if (!t1 && !t2) return true;
    if (!t1 || !t2) return false;
    return (
        t1.val === t2.val &&
        isMirror(t1.right, t2.left) &&
        isMirror(t1.left, t2.right)
    );
}
