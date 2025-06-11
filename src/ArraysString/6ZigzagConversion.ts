/**
 * Convert a string that is written in "zigzag" patter.
 *
 * @param s string
 * @param numRows number of rows in pattern
 */
function convert(s: string, numRows: number): string {
    if (numRows == 1) {
        return s;
    }
    // Generate 2D Grid
    const grid: string[][] = [];
    for (let i = 0; i < numRows; i++) {
        grid.push([]);
    }
    // Direction
    let direction = 1;
    let row = 0;
    for (let char of s) {
        grid[row].push(char);
        if (row == 0 && direction == -1) {
            row = 1;
            direction = 1;
        } else if (row == numRows - 1 && direction == 1) {
            row = numRows - 2;
            direction = -1;
        } else {
            row += direction;
        }
    }
    // Traverse 2D Grid to generate new string
    return grid.map(row => row.join('')).join('');
};