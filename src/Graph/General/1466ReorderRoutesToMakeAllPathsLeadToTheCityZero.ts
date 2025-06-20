/**
 * Return the minimum number of edges changed such that each city can visit the city 0.
 *
 * @param n number of cities, numbered 0 to n - 1
 * @param connections connections[i] = [ai, bi] represents a road from city ai to city bi
 */
function minReorder(n: number, connections: number[][]): number {
    // Create Nodes
    const map = new Map<number, UnDirGraphNode>();
    for (let i = 0; i < n; i++) {
        map.set(i, new UnDirGraphNode(i));
    }
    // Create Connections
    const connectionsSet = new Set<string>();
    for (let connection of connections) {
        connectionsSet.add(JSON.stringify(connection));
        const firstNode = map.get(connection[0])!;
        const secondNode = map.get(connection[1])!;
        firstNode.edges.push(secondNode);
        secondNode.edges.push(firstNode);
    }
    // Do DFS
    let edgesToReverse = 0;
    const visited = new Set<number>();
    function dfs(node: UnDirGraphNode) {
        if (visited.has(node.val)) {
            return;
        }
        visited.add(node.val);
        for (let edge of node.edges) {
            if (!visited.has(edge.val)) {
                if (!connectionsSet.has(JSON.stringify([edge.val, node.val]))) {
                    edgesToReverse++;
                }
                dfs(edge);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        dfs(map.get(i)!);
    }
    return edgesToReverse;
};

class UnDirGraphNode {
    val: number
    edges: UnDirGraphNode[]

    constructor(val?: number, edges?: UnDirGraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.edges = (edges===undefined ? [] : edges)
    }
}