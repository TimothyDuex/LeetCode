/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
class WordDictionary {
    private trie: Trie;

    constructor() {
        this.trie = new Trie();
    }

    addWord(word: string): void {
        this.trie.insert(word);
    }

    search(word: string): boolean {
        return this.searchWithPeriod(word, this.trie.head);
    }

    searchWithPeriod(word: string, trieNode: TrieNode): boolean {
        let ptrNode = trieNode;
        let i = 0;
        while (i < word.length) {
            if (word.charAt(i) == '.') {
                for (let node of ptrNode.nodes) {
                    if(this.searchWithPeriod(word.substring(i + 1), node)) {
                        return true;
                    }
                }
                return false;
            } else {
                const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == word.charAt(i));
                if (foundNodeIndex == -1) { // Not found
                    return false;
                } else { // Node Found
                    ptrNode = ptrNode.nodes[foundNodeIndex];
                    i++;
                }
            }
        }
        return ptrNode.isEnd;
    }
}

