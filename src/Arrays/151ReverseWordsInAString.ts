/**
 * Reverse the order of the words.
 *
 * @param s input string
 */
function reverseWords(s: string): string {
    const reversed: string[] = [];
    const words = s.split(' ');
    for (let i = words.length - 1; i >= 0; i--) {
        const trimmed = words[i].trim();
        if (trimmed.length > 0) {
            reversed.push(trimmed);
        }
    }
    return reversed.join(" ");
};