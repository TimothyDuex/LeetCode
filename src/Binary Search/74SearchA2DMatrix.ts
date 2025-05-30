/**
 * Return true if target is in matrix, false otherwise.
 * Each row is sorted in non-decreasing order.
 * The first integer of each row is greater than the last integer of the previous row.
 *
 * Solution must be O(log(m*n)) time.
 *
 * @param matrix m x n integer array
 * @param target target integer to see if in array
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    // Turn Matrix into array
    const array: number[] = [];
    for (const row of matrix) {
        array.push(...row);
    }
    // Binary Search on Array
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] == target) {
            return true;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else if (array[mid] > target) {
            right = mid - 1;
        }
    }
    return false;
};