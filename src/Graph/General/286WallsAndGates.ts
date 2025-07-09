/**
 * Fill each empty room with the distance to its nearest gate.
 * If it is impossible to reach a gate, it should be filled with INF.
 *
 * Rooms are initialized with these three possible values.
 *
 * -1 A wall or an obstacle.
 * 0 A gate.
 * INF Infinity means an empty room. We use the value 231 - 1 = 2147483647
 * to represent INF as you may assume that the distance to a gate is less than 2147483647.
 *
 * @param rooms m x n grid
 */
function wallsAndGates(rooms: number[][]): void {
    function dfs(row: number, col: number, distance: number) {
        if (
            row < 0 ||
            row >= rooms.length ||
            col < 0 ||
            col >= rooms[0].length
        ) {
            return;
        }
        // Already seen this square, distance if farther can stop dfs early
        if (rooms[row][col] == 0 || distance >= rooms[row][col]) {
            return;
        }
        rooms[row][col] = distance;
        dfs(row - 1, col, distance + 1);
        dfs(row + 1, col, distance + 1);
        dfs(row, col - 1, distance + 1);
        dfs(row, col + 1, distance + 1);
    }
    for (let i = 0; i < rooms.length; i++) {
        for (let j = 0; j < rooms[i].length; j++) {
            if (rooms[i][j] == 0) {
                dfs(i - 1, j, 1);
                dfs(i + 1, j, 1);
                dfs(i, j - 1, 1);
                dfs(i, j + 1, 1);
            }
        }
    }
};