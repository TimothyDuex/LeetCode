/**
 * Return the minimum number of intervals you need to remove
 * to make the rest of the intervals non-overlapping.
 *
 * @param intervals array of intervals
 */
function eraseOverlapIntervals(intervals: number[][]): number {
    let remove = 0;
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let y = intervals[0][1];
    for (let i: number = 1; i < intervals.length; i++) {
        const newInterval = intervals[i];
        if (newInterval[0] < y) {
            remove++;
            continue;
        }
        y = newInterval[1];
    }
    return remove;
};