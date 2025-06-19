/**
 * Return the minimum number of minutes that must elapse until no
 * cell has a fresh orange. If this is impossible, return -1.
 *
 * 0 representing an empty cell
 * 1 representing a fresh orange
 * 2 representing a rotten orange
 *
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 *
 * @param grid m x n grid
 */
function orangesRotting(grid: number[][]): number {
    let mins: number = 0;
    const q: number[][] = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 2) {
                q.push([i, j, 0]);
            }
        }
    }
    while (q.length > 0) {
        const coords: number[] = q.shift()!;
        const row = coords[0];
        const col = coords[1];
        const currentMin = coords[2];
        // Avoid out of bounds values
        if (
            row < 0 ||
            col < 0 ||
            row >= grid.length ||
            col >= grid[0].length
        ) {
            continue;
        }
        // Check if "already visited"
        if (grid[row][col] == 0 || grid[row][col] > 2) {
            continue;
        }
        grid[row][col] = 3; // Make Rotten
        mins = Math.max(mins, currentMin);
        q.push([row - 1, col, currentMin + 1]);
        q.push([row + 1, col, currentMin + 1]);
        q.push([row, col - 1, currentMin + 1]);
        q.push([row, col + 1, currentMin + 1]);
    }
    // See if any 1s remain
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                return -1;
            }
        }
    }
    return mins;
};