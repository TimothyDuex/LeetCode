/**
 * Return preorder traversal of tree.
 *
 * @param root root of binary tree
 */
function preorderTraversal(root: TreeNode | null): number[] {
    // Iterative
    if (root === null) return [];
    const ans: number[] = [];
    const s = [];
    s.push(root);
    while (s.length > 0) {
        const node: TreeNode = s.pop()!;
        ans.push(node.val);
        if (node.right) s.push(node.right);
        if (node.left) s.push(node.left);
    }
    return ans;
};