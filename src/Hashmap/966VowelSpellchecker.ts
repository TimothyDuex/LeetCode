/**
 * Implement a spellchecker that converts a query word into a correct word.
 *
 * @param wordlist word list
 * @param queries list of query words
 */
function spellchecker(wordlist: string[], queries: string[]): string[] {
    let ans: string[] = [];
    const wordMap: Map<string, string[]> = new Map();
    const wordLowercaseMap: Map<string, string[]> = new Map();
    const wordVowelMap: Map<string, string[]> = new Map();
    function insertIntoWordMap(key: string, value: string, map: Map<string, string[]>) {
        if (map.has(key)) {
            const entry = map.get(key)!;
            entry.push(value);
            map.set(key, entry);
        } else {
            map.set(key, [value]);
        }
    }
    for (const word of wordlist) {
        insertIntoWordMap(word, word, wordMap);
        insertIntoWordMap(word.toLowerCase(), word, wordLowercaseMap);
        insertIntoWordMap(word.replace(/[aeiouAEIOU]/g, '*').toLowerCase(), word, wordVowelMap);
    }
    for (const query of queries) {
        const normalResult = wordMap.get(query);
        if (normalResult) {
            ans.push(normalResult[0]);
            continue;
        }
        const lowercaseResult = wordLowercaseMap.get(query.toLowerCase());
        if (lowercaseResult) {
            ans.push(lowercaseResult[0]);
            continue;
        }
        const vowelResult = wordVowelMap.get(query.replace(/[aeiouAEIOU]/g, '*').toLowerCase());
        if (vowelResult) {
            ans.push(vowelResult[0]);
            continue;
        }
        ans.push("");
    }
    return ans;
};