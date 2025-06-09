/**
 * Update the board to reflect its state.
 *
 * Do not return anything, modify board in-place instead.
 *
 * @param board m x n grid of cells
 */
function gameOfLife(board: number[][]): void {
    function nextStateHelper(x: number, y: number): void {
        // Find neighbor coords
        const neighbors: number[][] = [];
        neighbors.push([x - 1, y - 1]);
        neighbors.push([x, y - 1]);
        neighbors.push([x + 1, y - 1]);
        neighbors.push([x - 1, y]);
        neighbors.push([x + 1, y]);
        neighbors.push([x - 1, y + 1]);
        neighbors.push([x, y + 1]);
        neighbors.push([x + 1, y + 1]);
        // Determine num of live neighbors
        let liveNeighbors = 0;
        for(let neighbor of neighbors) {
            const r = neighbor[0];
            const c = neighbor[1];
            if (
                r < 0 ||
                c < 0 ||
                r >= board.length ||
                c >= board[0].length
            ) {
                continue;
            }
            if (board[r][c] > 0) {
                liveNeighbors++;
            }
        }
        // Determine next state
        if (board[x][y] > 0) {
            if (liveNeighbors < 2) {
                board[x][y] = 2;
            } else if (liveNeighbors > 3) {
                board[x][y] = 2;
            }
        } else {
            if (liveNeighbors == 3) {
                board[x][y] = -1;
            }
        }
    }
    // First pass to determine new states
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            nextStateHelper(r, c);
        }
    }
    // Second pass to do sequential next state of board
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] == -1) {
                board[r][c] = 1;
            } else if (board[r][c] == 2) {
                board[r][c] = 0;
            }
        }
    }
};
