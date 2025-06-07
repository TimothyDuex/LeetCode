/**
 * Return inorder traversal of tree.
 *
 * @param root root of binary tree
 */
function inorderTraversal(root: TreeNode | null): number[] {
    // Iterative
    if (root == null) return [];
    const ans: number[] = [];
    const s: TreeNode[] = [];
    let curr: TreeNode | null = root;
    while (curr != null || s.length > 0) {
        // Traverse Left
        while (curr != null) {
            s.push(curr);
            curr = curr.left;
        }
        const node = s.pop()!
        // Do Node
        ans.push(node.val);
        // Go right
        curr = node.right;

    }
    return ans;
};
