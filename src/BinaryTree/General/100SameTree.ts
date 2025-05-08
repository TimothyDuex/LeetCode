/**
 * Given the roots of two binary trees p and q,
 * write a function to check if they are the same or not.
 *
 * @param p first tree root node
 * @param q second tree root node
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Non-algorithmic answer
    // return JSON.stringify(p) === JSON.stringify(q);

    // Traverse Each Tree and build arrays
    const pArray: (number | null)[] = [];
    const qArray: (number | null)[] = [];

    traverseAndBuildArrayFromTree(p, pArray);
    traverseAndBuildArrayFromTree(q, qArray);
    // Compare arrays
    // Again, could just use JSON.stringify()...
    return compareArrays(pArray, qArray);
};

function traverseAndBuildArrayFromTree(node: TreeNode | null, array: (number | null)[]): void {
    if (node == null) {
        array.push(null);
    } else {
        array.push(node.val);
        traverseAndBuildArrayFromTree(node.left, array);
        traverseAndBuildArrayFromTree(node.right, array);
    }
}

const compareArrays = (a: (number | null)[], b: (number | null)[]) => {
    if (a.length !== b.length) return false;
    else {
        // Comparing each element of your array
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    }
};