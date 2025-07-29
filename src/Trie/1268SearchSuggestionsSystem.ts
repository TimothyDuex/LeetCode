/**
 * Return a list of lists of the suggested products after each character of searchWord is typed.
 *
 * @param products array of strings
 * @param searchWord search word
 */
function suggestedProducts(products: string[], searchWord: string): string[][] {
    const trie = new Trie1268();
    for (const product of products) {
        trie.insert(product);
    }
    return trie.search(searchWord);
};

class Trie1268 {
    public head: TrieNode1268;

    constructor() {
        this.head = new TrieNode1268(' ');
    }

    insert(word: string): void {
        let ptrNode = this.head;
        let i = 0;
        while (i < word.length) {
            const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == word.charAt(i));
            if (foundNodeIndex == -1) { // Not found
                let newNode = new TrieNode1268(word.charAt(i));
                newNode.words = [word];
                ptrNode.nodes.push(newNode);
                ptrNode = newNode;
                i++;
            } else { // Node Found
                ptrNode = ptrNode.nodes[foundNodeIndex];
                ptrNode.words.push(word);
                ptrNode.words = ptrNode.words.sort();
                i++;
            }
        }
    }

    search(word: string): string[][] {
        let searchResults: string[][] = [];
        let ptrNode = this.head;
        let i = 0;
        while (i < word.length) {
            const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == word.charAt(i));
            if (foundNodeIndex == -1) { // Not found
                while (i < word.length) {
                    searchResults.push([]);
                    i++;
                }
                return searchResults;
            } else { // Node Found
                ptrNode = ptrNode.nodes[foundNodeIndex];
                searchResults.push(ptrNode.words.slice(0,3));
                i++;
            }
        }
        return searchResults;
    }
}

class TrieNode1268 {
    char: string
    nodes: TrieNode1268[]
    words: string[] = []
    constructor(char: string, nodes?: TrieNode1268[]) {
        this.char = (char===undefined ? '' : char)
        this.nodes = (nodes===undefined ? [] : nodes)
    }
}