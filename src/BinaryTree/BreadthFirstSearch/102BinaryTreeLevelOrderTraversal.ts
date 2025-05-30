/**
 * Return the level order traversal of the tree node values.
 *
 * @param root root of binary tree
 */
function levelOrder(root: TreeNode | null): number[][] {
    // Null Check
    if (root === null) return [];
    const ans: number[][] = [];
    let stack = [root];
    while (stack.length > 0) {
        let tempStack: TreeNode[] = [];
        let levelArray: number[] = [];
        while (stack.length > 0) {
            const node = stack.shift();
            levelArray.push(node!.val);
            if (node!.left) tempStack.push(node!.left!);
            if (node!.right) tempStack.push(node!.right!);
        }
        ans.push(levelArray);
        stack = tempStack;
    }
    return ans;
};