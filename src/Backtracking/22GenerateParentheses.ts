/**
 * Generate all combinations of well-formed parentheses.
 *
 * @param n pairs of parentheses
 */
function generateParenthesis(n: number): string[] {
    const ans: string[] = [];
    function backtrack(path: string, open: number, opened: number) {
        if (path.length == n * 2) {
            ans.push(path);
            return;
        }
        if (open > 0) {
            backtrack(path + '(', open - 1, opened + 1);
        }
        if (opened > 0) {
            backtrack(path + ')', open, opened - 1);
        }
    }
    backtrack('', n, 0);
    return ans;
};