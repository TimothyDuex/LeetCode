/**
 * Given a string s, return the number of palindromic substrings in it.
 *
 * @param s string
 */
function countSubstrings(s: string): number {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        ans += countNumberOfPalindromes(s, i, i);
        ans += countNumberOfPalindromes(s, i, i + 1);
    }
    return ans;
};

function countNumberOfPalindromes(s: string, i: number, j: number): number {
    let ans = 0;
    while (i > -1 && j < s.length) {
        if (s.charAt(i) == s.charAt(j)) {
            ans++;
            i--;
            j++;
        } else {
            break;
        }
    }
    return ans;
}