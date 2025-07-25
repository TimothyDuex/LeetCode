/**
 * Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 *
 * @param root root node of binary tree
 */
function maxLevelSum(root: TreeNode | null): number {
    if (root == null) return 0;
    let s: TreeNode[] = [];
    s.push(root);
    let max = Number.MIN_SAFE_INTEGER;
    let level = 1;
    let ans = level;
    while (s.length > 0) {
        let tempS: TreeNode[] = [];
        let sum = 0;
        while (s.length > 0) {
            const node = s.pop()!;
            sum += node.val;
            if (node.left) tempS.push(node.left);
            if (node.right) tempS.push(node.right);
        }
        if (sum > max) {
            ans = level;
            max = sum;
        }
        level++;
        s = tempS;
    }
    return ans;
};