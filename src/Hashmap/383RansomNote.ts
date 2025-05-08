/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * @param ransomNote input string one
 * @param magazine input string two
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    // Create Single Hashmap
    // Add 1 if character from magazine, subtract 1 if from note
    let map = new Map;
    map = stringToMap(map, magazine, 1);
    map = stringToMap(map, ransomNote, -1);
    for (const [key, value] of map) {
        if (value < 0) {
            return false;
        }
    }

    return true;
};

function stringToMap(map: Map<string, number>, input: string, toAdd: number): Map<string, number> {
    for (let char of input) {
        map.set(char, (map.get(char) || 0) + toAdd);
    }
    return map;
}