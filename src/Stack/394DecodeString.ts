/**
 * Given an encoded string, return its decoded string.
 *
 * The encoding rule is: k[encoded_string], where the encoded_string
 * inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 *
 * @param s encoded string
 */
function decodeString(s: string): string {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != ']') {
            stack.push(s.charAt(i));
            continue;
        }
        const innerStack: string[] = [];
        while(stack[stack.length - 1] != '[') {
            innerStack.push(stack.pop()!);
        }
        const innerString = innerStack.reverse().join('');
        stack.pop()!; // Pop left bracket '['
        // Get mult number
        const innerNumberStack: string[] = [];
        while (/[0-9]/.test(stack[stack.length - 1])) {
            innerNumberStack.push(stack.pop()!);
        }
        const multNumber = Number(innerNumberStack.reverse().join(''));

        const multInnerString = innerString.repeat(multNumber);
        stack.push(multInnerString);
    }
    return stack.join('');
};