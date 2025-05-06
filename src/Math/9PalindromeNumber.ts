/**
 * Given an integer x, return true if x is a palindrome, and false otherwise.
 *
 * @param x input number
 */
function isPalindrome(x: number): boolean {
    // Negatives cannot be palindromes
    // Numbers ending in 0 can't begin with 0
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }

    // Get the reverse of x until the reverse is equal or greater than the original
    let reverseX: number = 0;
    while (x > reverseX) {
        // Append the last digit of x
        reverseX = reverseX * 10 + (x % 10);
        // Update X to get next digit on iteration of loop
        x = Math.floor(x / 10);
    }

    // Using an || to handle even or odd digit numbers
    return x == reverseX || x == Math.floor(reverseX / 10);
};