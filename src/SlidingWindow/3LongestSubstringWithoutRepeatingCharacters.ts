/**
 * Given a string s, find the length of the longest substring
 * without duplicate characters.
 *
 * @param s input string
 */
function lengthOfLongestSubstring(s: string): number {
    if (s.length == 0) {
        return 0;
    }
    let solution = 0;
    let left = 0;
    const letterMap = new Map<string, number>();
    for (let right = 0; right < s.length; right++) {
        // Letter is not in map
        if (!letterMap.has(s.charAt(right))) {
            solution = Math.max(solution, right - left + 1);
        } else {
            while (letterMap.has(s.charAt(right))) {
                letterMap.delete(s.charAt(left));
                left++;
            }
        }
        letterMap.set(s.charAt(right), right);
    }
    return solution;
};