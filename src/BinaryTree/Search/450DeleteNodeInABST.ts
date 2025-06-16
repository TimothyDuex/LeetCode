/**
 * Delete the node with the given key in the BST. Return the root node reference
 * (possibly updated) of the BST.
 *
 * @param root root node of binary tree
 * @param key key of node to delete
 */
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null;
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else {
        if (root.left == null && root.right == null) { // Leaf node
            root = null;
        } else if (root.left != null) {
            const predecessorNode: TreeNode = predecessor(root)!;
            root.val = predecessorNode.val;
            root.left = deleteNode(root.left, root.val);
        } else {
            const successorNode: TreeNode = successor(root)!;
            root.val = successorNode.val;
            root.right = deleteNode(root.right, root.val);
        }
    }
    return root;
};

function successor(node: TreeNode): TreeNode | null {
    let ptr = node.right;
    while (ptr != null && ptr.left != null) {
        ptr = ptr.left;
    }
    return ptr;
}

function predecessor(node: TreeNode): TreeNode | null {
    let ptr = node.left;
    while (ptr != null && ptr.right != null) {
        ptr = ptr.right;
    }
    return ptr;
}
