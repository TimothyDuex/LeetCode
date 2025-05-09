/**
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 *
 * @param s input string one
 * @param t input string two
 */
function isIsomorphic(s: string, t: string): boolean {
    // s and t will always be same length in this question
    const sToTMap = new Map();
    const TToSMap = new Map();
    for (let i = 0; i < s.length; i++) {
        // Do s to t hashmap
        if (sToTMap.has(s[i])) {
            const mapping = sToTMap.get(s[i]);
            if (mapping != t[i]) {
                return false;
            }
        } else {
            sToTMap.set(s[i], t[i]);
        }
        // Do t to s hashmap
        if (TToSMap.has(t[i])) {
            const mapping = TToSMap.get(t[i]);
            if (mapping != s[i]) {
                return false;
            }
        } else {
            TToSMap.set(t[i], s[i]);
        }
    }
    return true;
};
