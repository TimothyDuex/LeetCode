/**
 * Return true if the edges of the given graph make up a valid tree, and false otherwise.
 *
 * @param n number of nodes
 * @param edges integer array where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph
 */
function validTree(n: number, edges: number[][]): boolean {
    // Check for cycles or not connected due to number of edges
    if (edges.length != n - 1) return false;
    // Build code version of the graph
    const nodeArrayUndirected: number[][] = new Array(n);
    for (let i = 0; i < n; i++) {
        nodeArrayUndirected[i] = [];
    }
    for (let edge of edges) {
        nodeArrayUndirected[edge[0]].push(edge[1]);
        nodeArrayUndirected[edge[1]].push(edge[0]);
    }
    // Traverse the graph looking for connectedness
    let visited = new Array(n).fill(false);
    const s = [0]; // Stack
    while(s.length > 0) {
        const node: number = s.pop()!;
        if (visited[node]) {
            continue;
        } else {
            visited[node] = true;
        }
        const edges: number[] = nodeArrayUndirected[node];
        for (let edge of edges) {
            s.push(edge);
        }
    }
    return !visited.some(value => value == false);
};