/**
 * Return the minimum window substring of s such that every character in
 * t (including duplicates) is included in the window.
 *
 * @param s string
 * @param t string
 */
function minWindow(s: string, t: string): string {
    let minSubtring = "";
    if (t.length > s.length) return minSubtring;
    // Build Map of characters of t
    // O(m) to traverse characters in t one time over
    const tMap = new Map<string, number>();
    let entriesRemainingToFind = 0;
    for (const char of t) {
        entriesRemainingToFind++;
        if (tMap.has(char)) {
            tMap.set(char, tMap.get(char)! + 1);
        } else {
            tMap.set(char, 1);
        }
    }
    // Traverse S, keep track of pointers for letters as you go
    const sMap = new Map<string, number[]>();
    for (let i = 0; i < s.length; i++) { // Loop through S
        const char = s.charAt(i);
        if (!tMap.has(char)) { // Character not in t
            continue;
        }
        // Add to sMap
        entriesRemainingToFind--;
        if (sMap.has(char)) {
            sMap.get(char)!.push(i);
        } else {
            sMap.set(char, [i]);
        }
        // Check for length greater than tMap
        const sMapArray = sMap.get(char)!;
        if (sMapArray.length > tMap.get(char)!) {
            sMapArray.shift();
            entriesRemainingToFind++; // Counteract the -- if already found all of the letter
        }
        // Check for new minimum substring
        if (entriesRemainingToFind == 0) { // All entries found
            let minPtr: number = Number.MAX_SAFE_INTEGER;
            let maxPtr: number = Number.MIN_SAFE_INTEGER;
            for (const value of sMap.values()) {
                minPtr = Math.min(minPtr, value[0]);
                maxPtr = Math.max(maxPtr, value[value.length - 1]);
            }
            if (minSubtring == "" || maxPtr - minPtr + 1 < minSubtring.length) {
                minSubtring = s.slice(minPtr, maxPtr + 1);
            }
        }
    }
    return minSubtring;
};