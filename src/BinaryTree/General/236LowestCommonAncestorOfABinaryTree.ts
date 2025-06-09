/**
 * Find the lowest common ancestor (LCA) of two given nodes in the tree.
 *
 * The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants.
 *
 * @param root root node of binary tree
 * @param p node p
 * @param q node q
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null || p == null || q == null) return null;
    // Try postorder
    const left = lowestCommonAncestor(root.left, p, q);
    if (left != null) {
        return left;
    };
    const right = lowestCommonAncestor(root.right, p, q);
    if (right != null) {
        return right;
    };
    let traversal: number[] = [];
    createArrayOfPostOrderTraversalOfTree(root, traversal);
    if (traversal.indexOf(p.val) != -1 && traversal.indexOf(q.val) != -1) {
        return root;
    }
    return null;
};

function createArrayOfPostOrderTraversalOfTree(node: TreeNode | null, array: number[]): void {
    if (node == null) {
        return;
    }
    createArrayOfPostOrderTraversalOfTree(node.left, array);
    createArrayOfPostOrderTraversalOfTree(node.right, array);
    array.push(node.val);
}
