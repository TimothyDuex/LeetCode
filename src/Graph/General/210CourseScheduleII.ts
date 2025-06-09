/**
 * Return the ordering of courses you should take to finish all courses.
 * If there are many valid answers, return any of them. If it is impossible
 * to finish all courses, return an empty array.
 *
 * @param numCourses integer
 * @param prerequisites array where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai
 */
function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    // Build Directed Graph
    const nodes: number[][] = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) {
        nodes[i] = [];
    }
    for (let prereq of prerequisites) {
        const first = prereq[0];
        const second = prereq[1];
        nodes[second].push(first);
    }
    // Form topological sort
    const sort = new Array(numCourses);
    sort.fill(-1);
    let curr_last = numCourses - 1;
    const seen = new Set<number>();
    function dfs(course: number, depth: number): boolean {
        if (depth > numCourses) {
            return true;
        }
        if (seen.has(course)) {
            return false;
        }
        const node = nodes[course];
        for (let num of node) {
            if(dfs(num, depth + 1)) {
                return true;
            }
        }
        seen.add(course);
        sort[curr_last] = course;
        curr_last--;
        return false;
    }
    for (let i = 0; i < numCourses; i++) {
        if(dfs(i, 1)) {
            return [];
        };
    }
    return sort;
};