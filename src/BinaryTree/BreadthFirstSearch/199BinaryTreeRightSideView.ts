/**
 * Imagine yourself standing on the right side of it, return the
 * values of the nodes you can see ordered from top to bottom.
 *
 * @param root root of binary tree
 */
function rightSideView(root: TreeNode | null): number[] {
    // Null Check
    if (root == null) return [];
    const ans = [];
    let stack = [];
    stack.push(root);
    while (stack.length > 0) {
        const tempStack = [];
        ans.push(stack[stack.length - 1].val);
        while (stack.length > 0) {
            const node: TreeNode = stack.shift()!;
            if (node!.left) tempStack.push(node.left);
            if (node!.right) tempStack.push(node.right);
        }
        stack = tempStack;
    }
    return ans;
};