/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param ransomNote input string one
 * @param magazine input string two
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const magMap: Map<string, number> = new Map();
    for (let c of magazine) {
        if (magMap.has(c)) {
            magMap.set(c, magMap.get(c)! + 1);
        } else {
            magMap.set(c, 1);
        }
    }
    for (let c of ransomNote) {
        if (magMap.has(c)) {
            const numOfLetter = magMap.get(c)!;
            if (numOfLetter <= 0) {
                return false;
            } else {
                magMap.set(c, numOfLetter - 1);
            }
        } else {
            return false;
        }
    }
    return true;
};
