/**
 * Return true if you can visit all the rooms, or false otherwise.
 *
 * @param rooms an array where rooms[i] is the set of keys that you can obtain if you visited room i
 */
function canVisitAllRooms(rooms: number[][]): boolean {
    // Initialize
    const roomsVisited = new Set();
    const s: number[] = [];
    roomsVisited.add(0);
    for (let key of rooms[0]) {
        s.push(key);
    }
    // Loop
    while(s.length > 0) {
        const room = s.pop()!;
        // Skip if checked already
        if (roomsVisited.has(room)) {
            continue;
        }
        // Else
        roomsVisited.add(room);
        for (let key of rooms[room]) {
            s.push(key);
        }
    }
    return roomsVisited.size == rooms.length;
};