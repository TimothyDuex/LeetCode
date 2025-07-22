/**
 * Return the number of connected components in the graph.
 *
 * @param n number of nodes in graph
 * @param edges array where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 */
function countComponents(n: number, edges: number[][]): number {
    // Create undirected graph
    const map: Map<number, number[]> = new Map();
    for (let i = 0; i < n; i++) {
        map.set(i, []);
    }
    for (const edge of edges) {
        map.get(edge[0])!.push(edge[1]);
        map.get(edge[1])!.push(edge[0]);
    }
    // Traverse Graph DFS, could also use BFS
    const visited = new Array(n).fill(false);
    let connectedComponents = 0;
    for (let i = 0; i < n; i++) {
        if (visited[i]) {
            continue;
        }
        connectedComponents++;
        const s = []; // Stack
        s.push(i);
        while (s.length > 0) {
            const node = s.pop()!;
            if (visited[node]) {
                continue;
            }
            visited[node] = true;
            const edges: number[] = map.get(node)!;
            for (const edge of edges) {
                s.push(edge);
            }
        }
    }
    // Return number of connected components
    return connectedComponents;
};