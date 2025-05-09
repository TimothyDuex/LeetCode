/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 *
 * @param s input string one
 * @param t input string two
 */
function isSubsequence(s: string, t: string): boolean {
    // Empty s check
    if (s.length === 0) return true;
    
    let sPointer = 0;
    let tPointer = 0;
    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] == t[tPointer]) {
            sPointer++;
        }
        if (sPointer == s.length) {
            return true;
        }
        tPointer++;
    }

    return false;
};