/**
 * Determine if the root is for a valid binary tree.
 *
 * @param root root node of binary tree
 */
function isValidBST(root: TreeNode | null): boolean {
    // Null Check
    if (root === null) return false;
    // Initialize
    let curr: TreeNode | null = root;
    const s: TreeNode[] = [];
    let maxValSeen: number;
    let firstVal: boolean = false;
    // Traverse while checking for validness
    while (curr != null || s.length > 0) {
        // Traverse left as far as can go
        while (curr != null) {
            s.push(curr);
            curr = curr.left;
        }
        const node = s.pop()!;
        if (!firstVal) {
            maxValSeen = node.val;
            firstVal = true;
        } else {
            if (node.val <= maxValSeen!) {
                return false;
            } else {
                maxValSeen = node.val;
            }
        }
        curr = node.right;
    }
    return true;
};