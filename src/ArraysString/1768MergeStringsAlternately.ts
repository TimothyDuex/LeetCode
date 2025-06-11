/**
 * Merge the strings by adding letters in alternating order.
 *
 * @param word1 string
 * @param word2 string
 */
function mergeAlternately(word1: string, word2: string): string {
    let ptr1 = 0;
    let ptr2 = 0;
    let ans = '';
    while (ptr1 < word1.length || ptr2 < word2.length) {
        if (ptr1 < word1.length) {
            ans = ans.concat(word1.charAt(ptr1));
            ptr1++;
        }
        if (ptr2 < word2.length) {
            ans = ans.concat(word2.charAt(ptr2));
            ptr2++;
        }
    }
    return ans;
};