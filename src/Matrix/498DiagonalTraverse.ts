/**
 * Return an array of all the elements of the array in a diagonal order.
 *
 * @param mat m x n matrix
 */
function findDiagonalOrder(mat: number[][]): number[] {
    const ans: number[] = [];
    let r = 0;
    let c = 0;
    let up = true;
    while (r < mat.length && c < mat[0].length) {
        ans.push(mat[r][c]);
        if (up) {
            if (r == 0 && c < mat[0].length - 1) {
                c++;
                up = false;
            } else if (r == 0 && c >= mat[0].length - 1) {
                r++;
                up = false;
            } else if (c == mat[0].length - 1) {
                r++;
                up = false;
            } else {
                r--;
                c++;
            }
        } else {
            if (c == 0 && r < mat.length - 1) {
                r++;
                up = true;
            } else if (c == 0 && r == mat.length - 1) {
                c++;
                up = true;
            } else if (r == mat.length - 1) {
                c++;
                up = true;
            } else {
                r++;
                c--;
            }
        }
    }
    return ans;
};