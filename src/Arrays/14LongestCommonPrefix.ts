/**
 * Find the longest common prefix.
 * If there is no common prefix, return an empty string "".
 *
 * @param strs array of strings
 */
function longestCommonPrefix(strs: string[]): string {
    for(let i = 0; i < strs[0].length; i++) {
        const letter = strs[0].charAt(i);
        let matches = 0;
        for (const str of strs) {
            if (str.charAt(i) != letter) {
                break;
            }
            matches++;
        }
        if (matches != strs.length) {
            return strs[0].slice(0, i);
        }
    }
    return strs[0];
};