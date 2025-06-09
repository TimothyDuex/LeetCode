/**
 * Return true if a word exists.
 *
 * @param board m x n grid of characters
 * @param word string
 */
function exist(board: string[][], word: string): boolean {
    // Define backtrack
    function backtrack(
        r: number,
        c: number,
        partial: string,
        visited: Set<number>
    ): boolean {
        if (
            r < 0 ||
            c < 0 ||
            r >= board.length ||
            c >= board[0].length ||
            visited.has(r * 10 + c)
        ) {
            return false;
        }
        if(board[r][c] == word.charAt(partial.length)) {
            const newVisited = new Set(visited);
            newVisited.add(r * 10 + c);
            partial = partial + word.charAt(partial.length);
            if (partial.length == word.length) {
                return true;
            }
            for(let k of [-1,1]) {
                if(backtrack(r + k, c, partial, newVisited)) {
                    return true;
                };
                if(backtrack(r, c + k, partial, newVisited)) {
                    return true;
                };
            }
        }
        return false;
    }
    // Do backtracking
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const set = new Set<number>;
            if(backtrack(i, j, '', set)) {
                return true;
            };
        }
    }
    return false;
};