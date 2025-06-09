/**
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * @param numCourses integer
 * @param prerequisites array where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Build Directed Graph
    const nodeMap = new Map<number, DirGraphNode>;
    for (let i = 0; i < numCourses; i++) {
        nodeMap.set(i, new DirGraphNode(i));
    }
    for (let prereq of prerequisites) {
        const first = nodeMap.get(prereq[0])!;
        const second = nodeMap.get(prereq[1])!;
        if (second.canMoveTo.findIndex((a) => a.val == first.val) == -1) {
            second.canMoveTo.push(first);
        }
    }
    // Try to detect cycle within Graph
    for (let i = 0; i < numCourses; i++) {
        function recursiveDFS(node: DirGraphNode, seen: number[]) {
            const seenCopy = [...seen];
            if (seenCopy.indexOf(node.val) != -1) {
                return false;
            }
            seenCopy.push(node.val);
            for (let course of node.canMoveTo) {
                if (!recursiveDFS(course, seenCopy)) {
                    return false;
                }
            }
            return true;
        }

        if (!recursiveDFS(nodeMap.get(i)!, [])) {
            return false;
        }
    }
    return true;
};

class DirGraphNode {
    val: number
    canMoveTo: DirGraphNode[]

    constructor(val?: number, canMoveTo?: DirGraphNode[]) {
        this.val = (val===undefined ? 0 : val)
        this.canMoveTo = (canMoveTo===undefined ? [] : canMoveTo)
    }
}