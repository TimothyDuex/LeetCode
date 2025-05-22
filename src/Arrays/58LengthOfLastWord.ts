/**
 * Return the length of the last word in the string.
 *
 * @param s string consisting of words and spaces
 */
function lengthOfLastWord(s: string): number {
    // Iterative approach
    let p = s.length;
    let length = 0;
    while (p > 0) {
        p--;
        // we're in the middle of the last word
        if (s[p] !== " ") {
            length++;
        }
        // here is the end of last word
        else if (length > 0) {
            return length;
        }
    }
    return length;
    /*
    let words = s.split(' ');
    words = words.filter(word => word.trim().length > 0);
    return words[words.length - 1].length;
     */
};