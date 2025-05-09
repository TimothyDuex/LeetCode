/**
 * Given a pattern and a string s, find if s follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between
 * a letter in pattern and a non-empty word in s.
 *
 * @param pattern pattern to match
 * @param s input string to find pattern in
 */
function wordPattern(pattern: string, s: string): boolean {
    // Break s into words
    const sWords: string[] = s.split(' ');

    // Check pattern length against word length
    if (pattern.length != sWords.length) return false;

    // Determine if pattern is "isomorphic" with the words
    const pToSmap = new Map();
    const sToPmap = new Map();
    for (let i = 0; i < pattern.length; i++) {
        // Do Pattern to S Words map
        if (pToSmap.has(pattern[i])) {
            const mapping = pToSmap.get(pattern[i]);
            if (mapping != sWords[i]) {
                return false;
            }
        } else {
            pToSmap.set(pattern[i], sWords[i]);
        }
        // Do S Words to Pattern Map
        if (sToPmap.has(sWords[i])) {
            const mapping = sToPmap.get(sWords[i]);
            if (mapping != pattern[i]) {
                return false;
            }
        } else {
            sToPmap.set(sWords[i], pattern[i]);
        }
    }
    return true;
};