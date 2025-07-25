/**
 * Return true if word1 and word2 are close, and false otherwise.
 *
 * Two strings are considered close if you can attain one from the other using
 * the following operations:
 *
 * Operation 1: Swap any two existing characters.
 * Operation 2: Transform every occurrence of one existing character into another existing
 * character, and do the same with the other character.
 *
 * @param word1 string
 * @param word2 string
 */
function closeStrings(word1: string, word2: string): boolean {
    // Create word 1 hashmap
    const word1Map = new Map<string, number>();
    for (let char of word1) {
        if (word1Map.has(char)) {
            word1Map.set(char, word1Map.get(char)! + 1);
        } else {
            word1Map.set(char, 1);
        }
    }
    // Create word 2 hashmap
    const word2Map = new Map<string, number>();
    for (let char of word2) {
        if (word2Map.has(char)) {
            word2Map.set(char, word2Map.get(char)! + 1);
        } else {
            word2Map.set(char, 1);
        }
    }
    if (
        JSON.stringify(Array.from(word1Map.keys()).sort()) !=
        JSON.stringify(Array.from(word2Map.keys()).sort())
    ) {
        return false;
    }
    if (
        JSON.stringify(Array.from(word1Map.values()).sort()) !=
        JSON.stringify(Array.from(word2Map.values()).sort())
    ) {
        return false;
    }
    return true;
};