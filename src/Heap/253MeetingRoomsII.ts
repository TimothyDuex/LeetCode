import {MinPriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Return the minimum number of conference rooms required.
 *
 * @param intervals array of meeting time intervals where intervals[i] = [starti, endi]
 */
function minMeetingRooms(intervals: number[][]): number {
    const sortedMeetings = intervals.sort((a, b) => a[0] - b[0]);
    const minHeap = new MinPriorityQueue<number>();
    let minRooms = 0;
    let rooms = 0;
    for (const meeting of sortedMeetings) {
        minHeap.push(meeting[1]);
        while (minHeap.size() > 0 && minHeap.front()! <= meeting[0]) {
            minHeap.pop();
        }
        rooms = minHeap.size();
        minRooms = Math.max(minRooms, rooms);
    }
    return minRooms;
};