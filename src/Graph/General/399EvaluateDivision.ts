/**
 * Return the answers to all queries. If a single answer
 * cannot be determined, return -1.0.
 *
 * @param equations array of variable pairs
 * @param values array of real numbers
 * @param queries queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?
 */
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    // Initialize stuff
    const nodeMap = new Map<string, CalcNode>;
    // Build Map
    for (let i = 0; i < equations.length; i++) {
        // Get/Add Nodes
        const letter1 = equations[i][0];
        const letter2 = equations[i][1];
        let node1: CalcNode;
        let node2: CalcNode;
        if (nodeMap.has(letter1)) {
            node1 = nodeMap.get(letter1)!;
        } else {
            node1 = {val: letter1, nodes: []}
            nodeMap.set(letter1, node1);
        }
        if (nodeMap.has(letter2)) {
            node2 = nodeMap.get(letter2)!;
        } else {
            node2 = {val: letter2, nodes: []}
            nodeMap.set(letter2, node2);
        }
        // Add paths
        node1.nodes.push([1 / values[i], node2])
        node2.nodes.push([values[i], node1])
    }
    // DFS for solving queries
    // Solve Queries
    const ans: number[] = [];
    for (let query of queries) {
        let node1: CalcNode;
        if (nodeMap.has(query[0])) {
            node1 = nodeMap.get(query[0])!;
        } else {
            ans.push(-1);
            continue;
        }
        if (query[0] == query[1]) {
            ans.push(1);
            continue;
        }
        let visited = new Set<string>;
        function dfs(node: CalcNode, path: number, target: string): number {
            if (visited.has(node.val)) {
                return -1;
            }
            visited.add(node.val);
            for (let edge of node.nodes) {
                if (edge[1].val == target) {
                    return (path / edge[0]);
                }
                const response = dfs(edge[1], path / edge[0], target);
                if(response != -1) {
                    return response;
                }
            }
            return -1;
        }
        ans.push(dfs(node1, 1, query[1]));
    }
    return ans;
};

interface CalcNode {
    val: string
    nodes: [number, CalcNode][]
}