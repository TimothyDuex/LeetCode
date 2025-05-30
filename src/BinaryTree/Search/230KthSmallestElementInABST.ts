/**
 * Return the kth smallest value of all the values of the nodes in the tree.
 *
 * @param root root node of BST
 * @param k integer for kth smallest value, 1 indexed
 */
function kthSmallest(root: TreeNode | null, k: number): number {
    const inOrderArray: number[] = [];
    createArrayOfInOrderTraversalOfTree(root, inOrderArray);
    return inOrderArray[k-1];
};

function createArrayOfInOrderTraversalOfTree(node: TreeNode | null, array: number[]): void {
    if (node == null) {
        return;
    }
    createArrayOfInOrderTraversalOfTree(node.left, array);
    array.push(node.val);
    createArrayOfInOrderTraversalOfTree(node.right, array);
}