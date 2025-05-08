/**
 * Given the root of a binary tree, return the average
 * value of the nodes on each level in the form of an array.
 *
 * @param root root node of tree
 */
function averageOfLevels(root: TreeNode | null): number[] {
    const levels = new Map<number, number[]>();
    // Construct BFS Map of Tree
    constructBFSLevelsMap(root, levels, 0);
    // Construct result array of averages
    const result = [];
    for (const [key, value] of levels) {
        const sum = value.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        result.push(sum / value.length);
    }
    return result;
};

function constructBFSLevelsMap(node: TreeNode | null, levels: Map<number, number[]>, level: number): void {
    if (node == null) {
        return;
    }
    levels.has(level) ? levels.get(level)?.push(node.val) : levels.set(level, [node.val]);
    constructBFSLevelsMap(node.left, levels, level + 1);
    constructBFSLevelsMap(node.right, levels, level + 1);
}