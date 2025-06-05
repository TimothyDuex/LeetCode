/**
 * Return the minimum number of arrows that must be shot to burst all balloons.
 *
 * @param points 2D integer array points where points[i] = [xstart, xend] denotes a balloon whose horizontal diameter stretches between xstart and xend
 */
function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;
    // Sort balloons
    points = points.sort((a, b) => {
        if (a[1] == b[1]) return 0;
        if (a[1] < b[1]) return -1;
        return 1;
    });
    let arrows = 1;
    let firstEnd = points[0][1];
    for (let p of points) {
        // If the current balloon starts after the end of another one,
        // one needs one more arrow
        if (firstEnd < p[0]) {
            arrows++;
            firstEnd = p[1];
        }
    }
    return arrows;
};