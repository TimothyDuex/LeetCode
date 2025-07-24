/**
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * @param numCourses integer
 * @param prerequisites array where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Initialize
    // Make Course Map
    const courseMap = new Map<number, number[]>();
    for (let i = 0; i < numCourses; i++) {
        courseMap.set(i, []);
    }
    // Make Indegree list
    const indegree: number[] = new Array(numCourses).fill(0);
    // Create Edges
    for (const prereq of prerequisites) {
        courseMap.get(prereq[1])!.push(prereq[0]);
        indegree[prereq[0]]++;
    }
    // BFS on Graph, starting from node of indegree 0
    const q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] == 0) {
            q.push(i);
        }
    }
    let visited = 0;
    while (q.length > 0) {
        visited++;
        const node: number = q.shift()!;
        const nextCourses: number[] = courseMap.get(node)!;
        for (const course of nextCourses) {
            indegree[course]--;
            if (indegree[course] == 0) {
                q.push(course);
            }
        }
    }
    return visited == numCourses;
}