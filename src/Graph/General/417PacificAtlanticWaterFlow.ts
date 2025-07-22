/**
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.
 *
 * @param heights m x n integer matrix where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
 */
function pacificAtlantic(heights: number[][]): number[][] {
    // Better solution is to start from oceans
    // Make maps of reachable from Pacific and Atlantic
    // Compare Maps to find ans
    // Initialize
    const result: boolean[][] = new Array(heights.length);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(heights[0].length).fill(false);
    }
    result[result.length - 1][0] = true;
    result[0][result[0].length - 1] = true;
    // Fill result array
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            const s: number[][] = []; // Stack
            s.push([i, j]);
            const oceans: string[] = [];
            // Visited
            const visited: boolean[][] = new Array(heights.length);
            for (let i = 0; i < visited.length; i++) {
                visited[i] = new Array(heights[0].length).fill(false);
            }
            while (s.length > 0) {
                const [row, col] = s.pop()!;
                if (visited[row][col]) {
                    continue;
                } else {
                    visited[row][col] = true;
                }
                // Touches Square already shown to touch both
                if (result[row][col]) {
                    result[i][j] = true;
                    break;
                }
                // Row
                if (row == 0) {
                    oceans.push('P');
                }
                if (row == heights.length - 1) {
                    oceans.push('A');
                }
                // Col
                if (col == 0) {
                    oceans.push('P');
                }
                if (col == heights[0].length - 1) {
                    oceans.push('A');
                }
                const moves = [[0, 1],[0, -1],[1,0],[-1,0]];
                for (const move of moves) {
                    const newRow = row + move[0];
                    const newCol = col + move[1];
                    // Out of bounds
                    if (
                        newRow < 0 ||
                        newRow >= heights.length ||
                        newCol < 0 ||
                        newCol >= heights[0].length
                    ) {
                        continue;
                    }
                    // Lower or Equal to
                    if (heights[newRow][newCol] <= heights[row][col]) {
                        s.push([newRow, newCol]);
                    }
                }
            }
            if (oceans.indexOf('A') != -1 && oceans.indexOf('P') != -1) {
                result[i][j] = true;
            }
        }
    }
    // Return true coordinates from result grid
    const ans: number[][] = [];
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < result[0].length; j++) {
            if (result[i][j]) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
};