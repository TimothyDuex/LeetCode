/**
 * Return number of nodes in the tree.
 *
 * According to Wikipedia, every level, except possibly the last,
 * is completely filled in a complete binary tree.
 *
 * Design an algorithm that runs in less than O(n) time complexity.
 *
 * @param root root of a complete binary tree
 */
function countNodes(root: TreeNode | null): number {
    // Null Check
    if (root === null) {
        return 0;
    }
    // Find Depth
    const d = computeDepthOfCompleteTree(root);
    if (d == 0) {
        return 1;
    }
    // Perform Binary Search in Binary Search
    let left = 0;
    let right = Math.pow(2, d) - 1;
    let pivot;
    while (left <= right) {
        pivot = left + Math.floor((right - left) / 2);
        if (exists(pivot, d, root)) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    return Math.pow(2, d) - 1 + left;
};

function computeDepthOfCompleteTree(node: TreeNode): number {
    let d = 0;
    while (node.left != null) {
        node = node.left;
        d++;
    }
    return d;
};

function exists(idx: number, d: number, node: TreeNode): boolean {
    let left = 0;
    let right = Math.pow(2, d) - 1;
    let pivot;
    for (let i = 0; i < d; ++i) {
        pivot = left + Math.floor((right - left) / 2);
        if (idx <= pivot) {
            node = node.left!;
            right = pivot;
        } else {
            node = node.right!;
            left = pivot + 1;
        }
    }
    return node != null;
}
