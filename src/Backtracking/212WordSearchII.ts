/**
 * Return all words on the board.
 *
 * @param board m x n board
 * @param words list of words to find
 */
function findWords(board: string[][], words: string[]): string[] {
    // Define result
    const ans: Set<string> = new Set();
    // Add List of words to find to a trie
    const trie: Trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }
    // Define backtrack
    function backtrack(
        r: number,
        c: number,
        partial: string,
        visited: Set<number>,
    ): void {
        if (
            r < 0 ||
            c < 0 ||
            r >= board.length ||
            c >= board[0].length ||
            visited.has(r * 100 + c)
        ) {
            return;
        }
        partial = partial + board[r][c];
        const newVisited = new Set(visited);
        newVisited.add(r * 100 + c);
        if(trie.startsWith(partial)) {
            if (trie.search(partial)) {
                ans.add(partial);
            }
            for(let k of [-1,1]) {
                backtrack(r + k, c, partial, newVisited);
                backtrack(r, c + k, partial, newVisited);
            }
        }
        return;
    }
    // Do backtracking
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            const set = new Set<number>;
            backtrack(i, j, '', set);
        }
    }
    // Return result
    return Array.from(ans);
}