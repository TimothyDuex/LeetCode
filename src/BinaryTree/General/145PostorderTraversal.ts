/**
 * Return postorder traversal of tree.
 *
 * @param root root of binary tree
 */
function postorderTraversal(root: TreeNode | null): number[] {
    // Iterative
    if (root === null) return [];
    const ans: number[] = [];

    const main: TreeNode[] = [root];
    const path: TreeNode[] = [];
    const curr: TreeNode | null = root;

    while (main.length > 0) {
        const node = main[main.length - 1];
        if (main[main.length - 1] == path[path.length - 1]) {
            ans.push(node.val);
            main.pop();
            path.pop();
        } else {
            path.push(node);
            if (node.right) main.push(node.right);
            if (node.left) main.push(node.left);
        }
    }

    return ans;
};
