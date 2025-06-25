/**
 * Return the maximum number of vowel letters in any substring of s with length k.
 *
 * @param s string
 * @param k integer
 */
function maxVowels(s: string, k: number): number {
    const vowels = new Set<string>(['a','e','i','o','u']);
    let max = 0;
    let vowelsInSubString = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s.charAt(i))) {
            vowelsInSubString++;
        }
    }
    max = vowelsInSubString;
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s.charAt(i))) {
            vowelsInSubString++;
        }
        if (vowels.has(s.charAt(i-k))) {
            vowelsInSubString--;
        }
        max = Math.max(max, vowelsInSubString);
    }
    return max;
};