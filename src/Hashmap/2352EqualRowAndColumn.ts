/**
 * Return the number of pairs (ri, cj) such that
 * row ri and column cj are equal.
 *
 * @param grid n x n integer matrix
 */
function equalPairs(grid: number[][]): number {
    const rowHashMap = new Map<string, number>();
    const columnHashMap = new Map<string, number>();
    for (let i = 0; i < grid.length; i++) {
        let row: string[] = [];
        let column: string[] = [];
        for (let j = 0; j < grid.length; j++) {
            row.push(grid[i][j].toString());
            column.push(grid[j][i].toString());
        }
        const rowString = row.join(' ');
        const columnString = column.join(' ');
        rowHashMap.has(rowString)
            ? rowHashMap.set(rowString, rowHashMap.get(rowString)! + 1)
            : rowHashMap.set(rowString, 1);
        columnHashMap.has(columnString)
            ? columnHashMap.set(columnString, columnHashMap.get(columnString)! + 1)
            : columnHashMap.set(columnString, 1);
    }
    let ans: number = 0;
    for (let [key, value] of rowHashMap.entries()) {
        if (columnHashMap.has(key)) {
            ans += value * columnHashMap.get(key)!;
        }
    }
    return ans;
};