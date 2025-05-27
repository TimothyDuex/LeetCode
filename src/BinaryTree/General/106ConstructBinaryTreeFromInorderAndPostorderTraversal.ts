/**
 * Return binary tree.
 *
 * @param inorder integer array of inorder tree
 * @param postorder integer array of postorder tree
 */
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    let postorderIndex = postorder.length - 1;
    // Build Hashmap for O(1) Look-up
    let inorderIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    function arrayToTree(left: number, right: number): TreeNode | null {
        // If there are no elements to construct the tree
        if (left > right) return null;
        // Select the preorder_index element as the root and increment it
        let rootValue = postorder[postorderIndex--];
        let root = new TreeNode(rootValue);
        // Build left and right subtree
        // Excluding inorderIndexMap[rootValue] element because it's the root
        root.right = arrayToTree(inorderIndexMap.get(rootValue) + 1, right);
        root.left = arrayToTree(left, inorderIndexMap.get(rootValue) - 1);
        return root;
    }

    return arrayToTree(0, postorder.length - 1);
};