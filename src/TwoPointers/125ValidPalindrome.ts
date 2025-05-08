/**
 * Given a string s, return true if it is a palindrome,
 * or false otherwise.
 *
 * @param s input string
 */
function isPalindrome(s: string): boolean {
    // Make everything lowercase
    s = s.toLowerCase();
    // Remove non-alphanumeric characters
    s = s.replace(/[^a-z0-9]/g, '');
    // Determine Palindrome
    let forwardPointer = 0;
    let reversePointer = s.length - 1;
    while (forwardPointer < reversePointer) {
        if (s.charAt(forwardPointer++) === s.charAt(reversePointer--)) {
        } else {
            return false;
        }
    }

    return true;
};
