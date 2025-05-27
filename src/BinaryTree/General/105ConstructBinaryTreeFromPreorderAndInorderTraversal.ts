/**
 * Construct and return the binary tree.
 *
 * @param preorder integer array of preorder traversal of tree
 * @param inorder integer array of inorder traversal of tree
 */
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    let preorderIndex = 0;
    // Build Hashmap for O(1) Look-up
    let inorderIndexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderIndexMap.set(inorder[i], i);
    }

    function arrayToTree(left: number, right: number): TreeNode | null {
        // If there are no elements to construct the tree
        if (left > right) return null;
        // Select the preorder_index element as the root and increment it
        let rootValue = preorder[preorderIndex++];
        let root = new TreeNode(rootValue);
        // Build left and right subtree
        // Excluding inorderIndexMap[rootValue] element because it's the root
        root.left = arrayToTree(left, inorderIndexMap.get(rootValue) - 1);
        root.right = arrayToTree(inorderIndexMap.get(rootValue) + 1, right);
        return root;
    }

    return arrayToTree(0, preorder.length - 1);
}

