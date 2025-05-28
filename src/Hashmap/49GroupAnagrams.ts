/**
 * Group anagrams together. Return answer in any order.
 *
 * @param strs array of strings
 */
function groupAnagrams(strs: string[]): string[][] {
    const anagramMap = new Map<string, string[]>();
    for (const str of strs) {
        const chars= stringToCharArray(str);
        const json = JSON.stringify(chars);
        if (anagramMap.has(json)) {
            anagramMap.get(json)!.push(str);
        } else {
            anagramMap.set(json, [str]);
        }
    }
    const answer = [];
    for (const value of anagramMap.values()) {
        answer.push(value);
    }
    return answer;
};

function stringToCharArray(input: string): string[] {
    const charArray = [];
    for (let char of input) {
        charArray.push(char);
    }
    charArray.sort();
    return charArray;
}
