/**
 *
 *
 * @param board n x n integer matrix
 */
function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    // Create space to board mapping
    const cells: [number, number][] = new Array(n * n + 1);
    let label = 1;
    const columns: number[] = new Array(n);
    for (let i = 0; i < n; i++) {
        columns[i] = i;
    }
    for (let row = n - 1; row >= 0; row--) {
        for (let column of columns) {
            cells[label++] = [row, column];
        }
        columns.reverse();
    }
    // Solve for distance
    let dist: number[] = new Array(n * n + 1);
    dist.fill(-1);
    const q: number[] = [];
    dist[1] = 0;
    q.push(1);
    while (q.length > 0) {
        let curr = q.shift()!;
        for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
            let row = cells[next][0];
            let column = cells[next][1];
            let destination = board[row][column] != -1 ? board[row][column] : next;
            if (dist[destination] == -1) {
                dist[destination] = dist[curr] + 1;
                q.push(destination);
            }
        }
    }
    return dist[n * n];
};