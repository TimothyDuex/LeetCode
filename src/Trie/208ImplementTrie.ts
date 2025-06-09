/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
class Trie {
    public head: TrieNode;

    constructor() {
        this.head = new TrieNode(' ');
    }

    insert(word: string): void {
        let ptrNode = this.head;
        let i = 0;
        while (i < word.length) {
            const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == word.charAt(i));
            if (foundNodeIndex == -1) { // Not found
                let newNode = new TrieNode(word.charAt(i));
                ptrNode.nodes.push(newNode);
                ptrNode = newNode;
                i++;
                if (i == word.length) ptrNode.isEnd = true;
            } else { // Node Found
                ptrNode = ptrNode.nodes[foundNodeIndex];
                i++;
                if (i == word.length) ptrNode.isEnd = true;
            }
        }
    }

    search(word: string): boolean {
        let ptrNode = this.head;
        let i = 0;
        while (i < word.length) {
            const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == word.charAt(i));
            if (foundNodeIndex == -1) { // Not found
                return false;
            } else { // Node Found
                ptrNode = ptrNode.nodes[foundNodeIndex];
                i++;
            }
        }
        return ptrNode.isEnd;
    }

    startsWith(prefix: string): boolean {
        let ptrNode = this.head;
        let i = 0;
        while (i < prefix.length) {
            const foundNodeIndex = ptrNode.nodes.findIndex(node => node.char == prefix.charAt(i));
            if (foundNodeIndex == -1) { // Not found
                return false;
            } else { // Node Found
                ptrNode = ptrNode.nodes[foundNodeIndex];
                i++;
            }
        }
        return true;
    }
}

class TrieNode {
    char: string
    nodes: TrieNode[]
    isEnd: boolean = false;
    constructor(char: string, nodes?: TrieNode[]) {
        this.char = (char===undefined ? '' : char)
        this.nodes = (nodes===undefined ? [] : nodes)
    }
}
