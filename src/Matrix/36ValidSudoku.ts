/**
 * Determine if a 9 x 9 Sudoku board is valid.
 *
 * @param board 9 items (rows) of 9 items each (numbers) as strings
 */
function isValidSudoku(board: string[][]): boolean {
    let N = board.length;
    // Use hash set to record the status
    let rows: Set<string>[] = new Array(N).fill(null).map(() => new Set());
    let cols: Set<string>[] = new Array(N).fill(null).map(() => new Set());
    let boxes: Set<string>[] = new Array(N).fill(null).map(() => new Set());
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            let val = board[r][c];
            // Check if the position is filled with number
            if (val == ".") {
                continue;
            }
            // Check the row
            if (rows[r].has(val)) {
                return false;
            }
            rows[r].add(val);
            // Check the column
            if (cols[c].has(val)) {
                return false;
            }
            cols[c].add(val);
            // Check the box
            let idx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (boxes[idx].has(val)) {
                return false;
            }
            boxes[idx].add(val);
        }
    }
    return true;
}