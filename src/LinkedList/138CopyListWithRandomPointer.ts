/**
 * Construct a deep copy of the list.
 * The _Node object contains next and random pointers.
 *
 * @param head head node of linked list
 */
function copyRandomList(head: _Node | null): _Node | null {
    // HashMap which holds old nodes as keys and new nodes as its values.
    let visitedHash: Map<_Node, _Node> = new Map();

    // Helper function to clone a node
    const clone_Node = function (node: _Node | null): _Node | null {
        if (node === null) {
            return null;
        }
        // If the node was already visited before.
        // Return the clone from the visited dictionary.
        if (visitedHash.has(node)) {
            return visitedHash.get(node)!;
        }
        // Create a new node
        // with the value same as old node.
        let new_Node: _Node = new _Node(node.val, null, null);
        // Save this value in the hash map. This is needed since there might be
        // loops during traversal due to randomness of random pointers and this would help us avoid them.
        visitedHash.set(node, new_Node);

        // Recursively copy the remaining linked list starting once from the next pointer and then from the random pointer.
        // Thus we have two independent recursive calls.
        // Finally we update the next and random pointers for the new node created.
        new_Node.next = clone_Node(node.next);
        new_Node.random = clone_Node(node.random);
        return new_Node;
    };

    return clone_Node(head);
}
