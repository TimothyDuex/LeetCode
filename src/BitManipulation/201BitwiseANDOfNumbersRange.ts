/**
 * Return the bitwise AND of all numbers in this range, inclusive.
 *
 * @param left left pointer
 * @param right right pointer
 */
function rangeBitwiseAnd(left: number, right: number): number {
    // Shortcut
    let shift = 0;
    while (left < right) {
        left >>= 1;
        right >>= 1;
        ++shift;
    }
    return right << shift;
    // Too slow
    /*
    let result = left;
    for (let i = left + 1; i <= right; i++) {
        result = result & i;
    }
    return result;
     */
};