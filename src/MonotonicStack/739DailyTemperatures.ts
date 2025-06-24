/**
 * Return an array answer such that answer[i] is the number of
 * days you have to wait after the ith day to get a warmer
 * temperature. If there is no future day for which this is possible,
 * keep answer[i] == 0 instead.
 *
 * @param temperatures integer array representing daily temperatures
 */
function dailyTemperatures(temperatures: number[]): number[] {
    const answer = new Array(temperatures.length).fill(0);
    const s: number[] = [];
    for (let i = 0; i < temperatures.length; i++) {
        while (s.length > 0 && temperatures[i] > temperatures[s[s.length - 1]]) {
            const topOfStack = s.pop()!;
            answer[topOfStack] = i - topOfStack;
        }
        s.push(i);
    }
    return answer;
};