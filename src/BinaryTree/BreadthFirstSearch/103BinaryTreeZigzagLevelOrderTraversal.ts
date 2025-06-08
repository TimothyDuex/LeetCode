/**
 * Return the zigzag level order traversal of tree.
 *
 * @param root root of binary tree
 */
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    // Null Check
    const ans: number[][] = [];
    if (root === null) return ans;
    // Initialize
    let s: TreeNode[] = [root];
    let forward: boolean = false;
    // Do traversal
    while (s.length > 0) {
        const tempS: TreeNode[] = [];
        const levelAns: number[] = [];
        while (s.length > 0) {
            const node = s.pop()!;
            levelAns.push(node.val);
            if (forward) {
                if (node.right) tempS.push(node.right);
                if (node.left) tempS.push(node.left);
            } else {
                if (node.left) tempS.push(node.left);
                if (node.right) tempS.push(node.right);
            }
        }
        ans.push(levelAns);
        forward = !forward;
        s = tempS;
    }
    return ans;
};