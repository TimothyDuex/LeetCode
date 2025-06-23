/**
 * Return the total number of provinces.
 *
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 *
 * @param isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise
 */
function findCircleNum(isConnected: number[][]): number {
    let provinces = 0;
    for (let i = 0; i < isConnected.length; i++) {
        if (isConnected[i].indexOf(1) != -1) {
            provinces++;
        }
        const s: number[] = [];
        s.push(i);
        while (s.length > 0) {
            const row = s.pop()!;
            for (let j = 0; j < isConnected[0].length; j++) {
                if (isConnected[row][j] == 0) {
                    continue;
                } else {
                    isConnected[row][j] = 0;
                    s.push(j);
                }
            }
        }
    }
    return provinces;
};