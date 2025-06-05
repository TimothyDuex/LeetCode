/**
 * Return an integer that represents the value of the expression.
 *
 * @param tokens array of strings that represent an arithmetic expression in a Reverse Polish Notation
 */
function evalRPN(tokens: string[]): number {
    if (tokens.length === 1) {
        return Number(tokens[0]);
    }
    const stack: number[] = [];
    const operators: Set<string> = new Set(['+', '-', '*', '/']);
    for (const token of tokens) {
        if (operators.has(token)) {
            let second = Number(stack.pop()!);
            let first = Number(stack.pop()!);
            let solution: number;
            if (token == '+') {
                solution = first + second;
            } else if (token == '-') {
                solution = first - second;
            } else if (token == '*') {
                solution = first * second;
            } else if (token == '/') {
                solution = first / second;
                if (solution < 0) {
                    solution = Math.ceil(solution);
                } else {
                    solution = Math.floor(solution);
                }
            }
            stack.push(solution!);
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop()!;
};