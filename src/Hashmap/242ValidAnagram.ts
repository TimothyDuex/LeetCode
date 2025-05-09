/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * @param s input string one
 * @param t input string two
 */
function isAnagram(s: string, t: string): boolean {
    // Create Single Hashmap
    // Add 1 if character from s, subtract 1 if from t
    let map = new Map;
    map = stringToMap(map, s, 1);
    map = stringToMap(map, t, -1);
    for (const [key, value] of map) {
        if (value != 0) {
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
