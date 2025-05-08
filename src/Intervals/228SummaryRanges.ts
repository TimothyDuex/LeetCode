/**
 * Return the smallest sorted list of ranges that cover all the numbers
 * in the array exactly. That is, each element of nums is covered
 * by exactly one of the ranges, and there is no integer x such
 * that x is in one of the ranges but not in nums.
 *
 * @param nums sorted unique integer array
 */
function summaryRanges(nums: number[]): string[] {
    // Initialize result and check for empty array
    const resultArray: string[] = [];
    if (nums.length === 0) return resultArray;
    // Begin finding intervals
    let startRange = nums[0];
    let endRange = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1] + 1) {
            endRange = nums[i];
        } else {
            if (startRange === endRange) {
                resultArray.push(`${startRange}`);
            } else {
                resultArray.push(`${startRange}->${endRange}`);
            }
            startRange = nums[i];
            endRange = nums[i];
        }
    }
    // Take care of last interval as loop will not
    if (startRange === endRange) {
        resultArray.push(`${startRange}`);
    } else {
        resultArray.push(`${startRange}->${endRange}`);
    }

    return resultArray;
};
