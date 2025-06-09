/**
 * Return a deep copy (clone) of the graph.
 *
 * @param node starting node of connected undirected graph
 */
function cloneGraph(node: _Node | null): _Node | null {

    // Remove before submission, placed here to avoid conflicts with other files, given identical names
    class _Node {
        val: number
        neighbors: _Node[]

        constructor(val?: number, neighbors?: _Node[]) {
            this.val = (val===undefined ? 0 : val)
            this.neighbors = (neighbors===undefined ? [] : neighbors)
        }
    }

    // Null check
    if (node === null) return null
    // Initialize
    const hashMap = new Map();

    // Helper Function
    function cloneGraphDFS(node: _Node) {
        // Means already visited
        let copiedNode;
        if (hashMap.has(node.val)) {
            return;
        } else {
            copiedNode = new _Node(node.val);
            hashMap.set(node?.val, copiedNode);
        }
        for (let neighbor of node.neighbors) {
            cloneGraphDFS(neighbor);
            copiedNode.neighbors.push(hashMap.get(neighbor.val));
        }
    }

    cloneGraphDFS(node);
    return hashMap.get(1);
};
