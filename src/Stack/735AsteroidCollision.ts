/**
 * Return the state of the asteroids after all collisions.
 *
 * @param asteroids integer array
 */
function asteroidCollision(asteroids: number[]): number[] {
    const ans: number[] = [];
    for (let asteroid of asteroids) {
        if (ans.length == 0 || asteroid > 0) {
            ans.push(asteroid);
            continue;
        } else {
            ans.push(asteroid);
            while (ans.length > 1 && ans[ans.length - 2] / ans[ans.length - 1] < 0) {
                const asteroid = ans.pop()!;
                const end = ans.pop()!;
                if (Math.abs(end) == Math.abs(asteroid)) {
                    break;
                } else if (Math.abs(end) < Math.abs(asteroid)) {
                    ans.push(asteroid);
                } else {
                    ans.push(end);
                    break;
                }
            }
        }
    }
    return ans;
};