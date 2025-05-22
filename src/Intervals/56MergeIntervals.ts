/**
 * Merge all overlapping intervals, and return an array of the
 * non-overlapping intervals that cover all the intervals in the input.
 *
 * @param intervals array of intervals
 */
function merge(intervals: number[][]): number[][] {
    // Check for intervals length of 1
    if (intervals.length == 1) {
        return intervals;
    }
    // Sort intervals by starting number
    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    // Traverse sorted intervals checking for overlap
    const solutionIntervals: number[][] = [];
    let tempInterval = sortedIntervals[0];
    for (let i = 1; i < sortedIntervals.length; i++) {
        if (tempInterval[1] >= sortedIntervals[i][0]) {
            tempInterval[1] = Math.max(tempInterval[1], sortedIntervals[i][1]);
            if (i === sortedIntervals.length - 1) {
                solutionIntervals.push(tempInterval);
                break;
            }
        } else {
            solutionIntervals.push(tempInterval);
            tempInterval = sortedIntervals[i];
            if (i === sortedIntervals.length - 1) {
                solutionIntervals.push(tempInterval);
                break;
            }
        }
    }
    return solutionIntervals;
};