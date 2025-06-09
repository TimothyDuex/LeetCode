/**
 * Flatten the tree into a "linked list".
 *
 * The "linked list" should use the same TreeNode class where the right child pointer points
 * to the next node in the list and the left child pointer is always null.
 * The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 *
 * @param root root node of binary tree
 */
function flatten(root: TreeNode | null): void {
    if (root == null) return;
    const s: TreeNode[] = [];

    function flatten(root: TreeNode | null, prev: TreeNode): void {
        if (root == null) {
            s.push(prev);
            return;
        }
        // Do Self
        const right = root.right;
        prev.right = root;
        prev.left = null;
        // Do Left
        let temp = s.length > 0 ? s.pop()! : root;
        flatten(root.left, temp);
        // Do Right
        temp = s.length > 0 ? s.pop()! : root;
        flatten(right, temp);
    }

    const dummyHead = new TreeNode(0);
    flatten(root, dummyHead);
};