/**
 * Determine if a person could attend all meetings.
 *
 * @param intervals array of meeting time where intervals[i] = [starti, endi]
 */
function canAttendMeetings(intervals: number[][]): boolean {
    const sortedMeetings = intervals.sort((a, b) => a[1] - b[1]);
    for (let i = 1; i < sortedMeetings.length; i++) {
        if(sortedMeetings[i][0] < sortedMeetings[i-1][1]) {
            return false;
        }
    }
    return true;
};