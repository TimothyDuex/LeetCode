/**
 * Given a string s containing just the characters
 * '(', ')', '{', '}', '[' and ']', determine if the
 * input string is valid.
 *
 * @param s input string
 */
function isValid(s: string): boolean {
    // Create a "Stack" using an array
    const stack: string[] = [];
    // Push and Pop based on top of stack being the correct closing bracket
    for (const char of s) {
        if (s.length === 0) {
            stack.push(char);
        } else if (compareBrackets(char, stack[stack.length - 1])) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

function compareBrackets(secondBracket:string, firstBracket: string): boolean {
    if (firstBracket === '(') {
        return secondBracket === ')';
    } else if (firstBracket === '[') {
        return secondBracket === ']';
    } else if (firstBracket === '{') {
        return secondBracket === '}';
    }
    return false;
}