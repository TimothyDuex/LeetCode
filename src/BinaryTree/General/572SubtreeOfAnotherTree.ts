/**
 * Return true if there is a subtree of root with the same structure
 * and node values of subRoot and false otherwise.
 *
 * @param root root node of binary tree
 * @param subRoot root node of binary tree
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    const subRootSerialization: string[] = [];
    preorder(subRoot, subRootSerialization);
    const rootSerialization: string[] = [];
    preorder(root, rootSerialization);
    return rootSerialization.join('').indexOf(subRootSerialization.join('')) != -1;
};

function preorder(node: TreeNode | null, serialization: string[]) {
    if (node == null) {
        serialization.push('^#');
        return;
    }
    serialization.push(`^${node.val.toString()}`);
    preorder(node.left, serialization);
    preorder(node.right, serialization);
}