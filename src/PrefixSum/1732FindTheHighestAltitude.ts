/**
 * Return the highest altitude of a point.
 *
 * gain[i] is the net gain in altitude between points i and i + 1
 *
 * @param gain integer array
 */
function largestAltitude(gain: number[]): number {
    let altitude = 0;
    let max = altitude;
    for (let i = 0; i < gain.length; i++) {
        altitude = altitude + gain[i];
        max = Math.max(max, altitude);
    }
    return max;
};