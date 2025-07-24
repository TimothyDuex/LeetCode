/**
 * Find the lowest common ancestor (LCA) node of two given nodes in the BST.
 *
 * @param root root node of tree
 * @param p node in tree
 * @param q node in tree
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root == null || p == null || q == null) return null;
    const pValue = p!.val;
    const qValue = q!.val;
    let node = root;
    while (node != null) {
        if (pValue < node.val && qValue < node.val) {
            node = node.left!;
        } else if (pValue > node.val && qValue > node.val) {
            node = node.right!;
        } else {
            return node;
        }
    }
    return null;
};


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
