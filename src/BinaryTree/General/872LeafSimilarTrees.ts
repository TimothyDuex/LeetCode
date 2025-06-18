/**
 * Return true if and only if the two given trees with head nodes
 * root1 and root2 are leaf-similar.
 *
 * @param root1 root of tree 1
 * @param root2 root of tree 2
 */
function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false;
    const root1Ans: number[] = [];
    const root2Ans: number[] = [];
    pushIfLeafDFS(root1, root1Ans);
    pushIfLeafDFS(root2, root2Ans);
    return JSON.stringify(root1Ans) === JSON.stringify(root2Ans);
};

function pushIfLeafDFS(node: TreeNode, arr: number[]): void {
    if (node.right == null && node.left == null) {
        arr.push(node.val);
    }
    if (node.left) pushIfLeafDFS(node.left, arr);
    if (node.right) pushIfLeafDFS(node.right, arr);
}