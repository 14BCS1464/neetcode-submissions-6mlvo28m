/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
       if (intervals.length === 0) return 0;

    const starts = intervals.map(i => i.start).sort((a, b) => a - b);
    const ends = intervals.map(i => i.end).sort((a, b) => a - b);

    let start = 0;
    let end = 0;

    let rooms = 0;
    let maxRooms = 0;

    while (start < intervals.length) {

        if (starts[start] < ends[end]) {
            // Need a new room
            rooms++;
            maxRooms = Math.max(maxRooms, rooms);
            start++;
        } else {
            // A meeting ended, free a room
            rooms--;
            end++;
        }
    }

    return maxRooms;
    }
}
