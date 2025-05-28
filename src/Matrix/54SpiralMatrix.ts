/**
 * Return all elements of the matrix in spiral order.
 *
 * @param matrix m x n matrix
 */
function spiralOrder(matrix: number[][]): number[] {
    // Initialize answer
    const answer: number[] = [];

    // Set initial spiral values
    let x = 0;
    let y = 0;
    let xMin = 0;
    let xMax = matrix[0].length;
    let yMin = 1;
    let yMax = matrix.length;
    while (answer.length < matrix.length * matrix[0].length) {
        // Move x right
        while (x < xMax) {
            answer.push(matrix[y][x]);
            x++;
        }
        if (answer.length == matrix.length * matrix[0].length) return answer;
        x--;
        y++;
        // Move y down
        while (y < yMax) {
            answer.push(matrix[y][x]);
            y++;
        }
        if (answer.length == matrix.length * matrix[0].length) return answer;
        y--;
        x--;
        // Move x left
        while (x >= xMin) {
            answer.push(matrix[y][x]);
            x--;
        }
        if (answer.length == matrix.length * matrix[0].length) return answer;
        x++;
        y--;
        // Move y up
        while (y >= yMin) {
            answer.push(matrix[y][x]);
            y--;
        }
        y++;
        // Set new spiral values
        xMin += 1;
        xMax -= 1;
        yMin += 1;
        yMax -= 1;
        // Move X to next spiral
        x++;
    }

    // Return answer
    return answer;
};