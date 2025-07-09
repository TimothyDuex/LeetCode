/**
 * Return the pattern with the largest score. If there is more than one pattern with the same largest score,
 * return the lexicographically smallest such pattern.
 *
 * The tuple [username[i], website[i], timestamp[i]] indicates that the user username[i] visited
 * the website website[i] at time timestamp[i].
 *
 * A pattern is a list of three websites (not necessarily distinct).
 *
 * For example, ["home", "away", "love"], ["leetcode", "love", "leetcode"], and ["luffy", "luffy", "luffy"] are all patterns.
 * The score of a pattern is the number of users that visited all the websites in the pattern in the same order they appeared in the pattern.
 *
 * For example, if the pattern is ["home", "away", "love"], the score is the number of users x such that x visited "home" then visited "away" and visited "love" after that.
 * Similarly, if the pattern is ["leetcode", "love", "leetcode"], the score is the number of users x such that x visited "leetcode" then visited "love" and visited "leetcode" one more time after that.
 * Also, if the pattern is ["luffy", "luffy", "luffy"], the score is the number of users x such that x visited "luffy" three different times at different timestamps.
 *
 * @param username string array
 * @param timestamp integer array
 * @param website string array
 */
function mostVisitedPattern(username: string[], timestamp: number[], website: string[]): string[] {
    // Create User History
    const userHistory: Map<string, [string, number][]> = new Map();
    for (let i = 0; i < username.length; i++) {
        if (userHistory.has(username[i])) {
            userHistory.get(username[i])!.push([website[i], timestamp[i]]);
        } else {
            userHistory.set(username[i], [[website[i], timestamp[i]]]);
        }
    }
    for (let [user, value] of userHistory) {
        value = value.sort((a, b) => a[1] - b[1]);
    }
    // Create User Patterns
    const userPatterns: Map<string, string[][]> = new Map();
    for (const [key, values] of userHistory) {
        const patternsSet: Set<string> = new Set();
        const patterns: string[][] = [];
        function backtrack(path: string[], index: number) {
            if (path.length == 3) {
                if (!patternsSet.has(JSON.stringify(path))) {
                    patternsSet.add(JSON.stringify(path));
                    patterns.push(path);
                }
                return;
            }
            for (let i = index; i < values.length; i++) {
                path.push(values[i][0]);
                backtrack([...path], i + 1);
                path.pop();
            }
        }
        backtrack([], 0);
        userPatterns.set(key, patterns);
    }
    // Build Map of Patterns to Score
    let maxScore = 0;
    let maxPattern: string[] = [];
    const map: Map<string, number> = new Map();
    for (let user of userPatterns.keys()) {
        for (let pattern of userPatterns.get(user)!) {
            if (map.has(JSON.stringify(pattern))) {
                map.set(JSON.stringify(pattern), map.get(JSON.stringify(pattern))! + 1);
            } else {
                map.set(JSON.stringify(pattern), 1);
            }
            const score = map.get(JSON.stringify(pattern))!;
            if (score > maxScore) {
                maxScore = score;
                maxPattern = pattern;
            } else if (score == maxScore) {
                maxPattern = [pattern, maxPattern].sort()[0];
            }
        }
    }
    // Return Max Pattern
    return maxPattern;
};