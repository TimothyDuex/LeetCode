/**
 * Given the root of a Binary Search Tree (BST), return the
 * minimum absolute difference between the values of any two
 * different nodes in the tree.
 *
 * @param root root node of the tree
 */
function getMinimumDifference(root: TreeNode | null): number {
    // Create Array of values in the tree in order
    const array: number[] = [];
    createArrayOfInOrderTraversalOfTree(root, array);
    // Find lowest difference between adjacent entries
    let lowestDifference = Number.MAX_SAFE_INTEGER;
    for (let i = array.length - 1; i > 0; i--) {
        lowestDifference = Math.min(lowestDifference, array[i] - array[i-1]);
    }
    return lowestDifference;
};
