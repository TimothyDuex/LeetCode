/**
 * Return the total sum of all root-to-leaf numbers.
 *
 * @param root root of binary tree
 */
function sumNumbers(root: TreeNode | null): number {
    let ans = 0;
    let stack: [TreeNode | null, number][] = []
    if (root) stack.push([root, 0]);
    while (stack.length > 0) {
        const [node, num] = stack.pop()!;
        const newNum = num * 10 + node!.val;
        if (node!.left == null && node!.right == null) {
            ans += newNum;
            continue;
        }
        if (node!.right) stack.push([node!.right, newNum]);
        if (node!.left) stack.push([node!.left, newNum]);
    }

    return ans;
};
