/**
 * Return the number of steps in the shortest path from the entrance to the nearest exit,
 * or -1 if no such path exists.
 *
 * @param maze m x n 0-indexed grid
 * @param entrance coordinates of starting point in maze
 */
function nearestExit(maze: string[][], entrance: number[]): number {
    const q: number[][] = [];
    q.push([entrance[0], entrance[1], 0]);
    maze[entrance[0]][entrance[1]] = '+';
    while (q.length > 0) {
        const room = q.shift()!;
        const row = room[0];
        const col = room[1];
        const moves = room[2];
        if (
            moves != 0 && (
                row == 0 ||
                col == 0 ||
                row == maze.length - 1 ||
                col == maze[0].length - 1
            )
        ) {
            return moves;
        }
        maze[row][col] = '+';
        for (let coord of [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]) {
            if (
                coord[0] < 0 ||
                coord[1] < 0 ||
                coord[0] >= maze.length ||
                coord[1] >= maze[0].length
            ) {
                continue;
            }
            if (maze[coord[0]][coord[1]] == '.') {
                q.push([coord[0], coord[1], moves + 1]);
            }
        }
    }
    return -1;
};