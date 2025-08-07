/**
 * Return the result of the evaluation.
 *
 * @param s represents a valid basic expression
 */
function calculate(s: string): number {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != ' ') { // Remove whitespaces
            if (s.charAt(i) == ')') {
                const tempResult = doArithmetic(stack);
                stack.push(tempResult.toString());
            } else {
                stack.push(s.charAt(i));
            }
        }
    }
    // Do arithmetic
    function doArithmetic(stack: string[]) {
        const operandSet = new Set(['+','-', '(']);
        let result: number = 0;
        let curr: number = 0;
        let tenPower: number = 0;
        while (stack.length > 0) {
            const char: string = stack.pop()!;
            if (operandSet.has(char)) {
                if (char == '(') {
                    break;
                } else if (char == '+') {
                    result = result + curr;
                } else if (char == '-') {
                    result = result - curr;
                }
                curr = 0;
                tenPower = 0;
            } else {
                if (tenPower == 0) {
                    curr = Number(char);
                    tenPower++;
                } else {
                    curr = Number(char) * Math.pow(10, tenPower++) + curr;
                }
            }
        }
        // Take care of case once stack ends
        if (curr != 0) {
            result = result + curr;
        }
        return result;
    }
    return doArithmetic(stack);
};