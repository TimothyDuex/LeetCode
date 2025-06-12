/**
 * Return the string after all stars have been removed.
 *
 * Choose a star in s.
 * Remove the closest non-star character to its left,
 * as well as remove the star itself.
 *
 * @param s string
 */
function removeStars(s: string): string {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (char == '*') {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};