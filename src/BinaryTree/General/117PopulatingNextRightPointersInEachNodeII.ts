/**
 * Populate each next pointer to point to its next right node.
 * If there is no next right node, the next pointer should be
 * set to NULL.
 *
 * @param root root node of binary tree
 */
function connect(root: _Node | null): _Node | null {
    if (root == null) return null;
    let queue = [root];
    while (queue.length > 0) {
        const tempQueue = [];
        let first = queue.shift()!;
        if (first.left) tempQueue.push(first.left!);
        if (first.right) tempQueue.push(first.right!);
        while (queue.length > 0) {
            const second = queue.shift()!;
            first.next = second;
            first = second;
            if (second.left) tempQueue.push(second.left!);
            if (second.right) tempQueue.push(second.right!);
        }
        queue = tempQueue;
    }
    return root;
};

class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null

    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}