/**
 * Capture regions that are surronded.
 *
 * Do not return anything, modify board in-place instead.
 *
 * @param board m x n matrix containing 'X' nad '0'
 */
function solve(board: string[][]): void {
    // Null Check
    if (board.length === 0) return;
    // Get Border Cells
    const n = board.length;
    const m = board[0].length;
    const borders: number[][] = [];
    for (let i = 0; i < n; i++) {
        borders.push([i, 0]);
        borders.push([i, m - 1]);
    }
    for (let j = 0; j < m; j++) {
        borders.push([0, j]);
        borders.push([n - 1, j]);
    }
    // Define BFS
    function bfs(r: number, c: number) {
        const q: number[][] = [[r, c]];
        while(q.length > 0) {
            const coords = q.shift()!;
            r = coords[0];
            c = coords[1];
            if (
                r < 0 ||
                r >= n ||
                c < 0 ||
                c >= m
            ) {
                continue;
            }
            if(board[r][c] == 'X') {
                continue;
            } else if (board[r][c] == 'O') {
                board[r][c] = 'E';
                q.push([r, c + 1]);
                q.push([r, c - 1]);
                q.push([r + 1, c]);
                q.push([r - 1, c]);
            }
        }
    }
    // Use BFS to set which '0's touch border
    for (let border of borders) {
        bfs(border[0], border[1]);
    }
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (board[i][j] == 'E') {
                board[i][j] = 'O';
            } else if (board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
};