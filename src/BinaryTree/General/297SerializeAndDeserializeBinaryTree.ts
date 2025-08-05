/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
    const treeAsArray: number[] = [];
    // Serialize via Level Traversal
    const q: (TreeNode | null)[] = [root];
    while (q.length > 0) {
        const node: TreeNode | null = q.shift()!;
        if (node == null) {
            treeAsArray.push(1001);
        } else {
            q.push(node.left);
            q.push(node.right);
            treeAsArray.push(node.val);
        }
    }
    return treeAsArray.join('#');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const queue: TreeNode[] = [];
    let curr: TreeNode | null = null;
    let first = null;
    let todo: number = 0;
    for (const str of data.split('#')) {
        const number = Number(str);
        // Set new node to null or node
        let node: TreeNode | null = null;
        if (Number(number) != 1001) {
            node = new TreeNode(number);
            queue.push(node);
        }
        // Build Tree
        if (first == null) {
            first = node;
            todo = 1;
        } else if (todo == 1) {
            curr = queue.shift()!;
            curr.left = node;
            todo = 2;
        } else { // todo == 2
            curr!.right = node;
            todo = 1;
        }
    }
    return first;
};

