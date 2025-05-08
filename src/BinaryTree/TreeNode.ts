class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function createArrayOfPreOrderTraversalOfTree(node: TreeNode | null, array: number[]): void {
    if (node == null) {
        return;
    }
    array.push(node.val);
    createArrayOfInOrderTraversalOfTree(node.left, array);
    createArrayOfInOrderTraversalOfTree(node.right, array);
}

function createArrayOfInOrderTraversalOfTree(node: TreeNode | null, array: number[]): void {
    if (node == null) {
        return;
    }
    createArrayOfInOrderTraversalOfTree(node.left, array);
    array.push(node.val);
    createArrayOfInOrderTraversalOfTree(node.right, array);
}

function createArrayOfPostOrderTraversalOfTree(node: TreeNode | null, array: number[]): void {
    if (node == null) {
        return;
    }
    createArrayOfInOrderTraversalOfTree(node.left, array);
    createArrayOfInOrderTraversalOfTree(node.right, array);
    array.push(node.val);
}
