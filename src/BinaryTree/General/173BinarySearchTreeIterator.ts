/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
class BSTIterator {
    private isNull: boolean;
    private curr: TreeNode | null;
    private s: TreeNode[];

    constructor(root: TreeNode | null) {
        this.isNull = root === null;
        if (!this.isNull) {
            this.curr = root;
        } else {
            this.curr = null;
        }
        this.s = [];
    }

    next(): number {
        if (this.isNull) return -1;
        if (this.curr != null || this.s.length > 0) {
            while (this.curr != null) {
                this.s.push(this.curr);
                this.curr = this.curr.left;
            }
            const node = this.s.pop()!;
            this.curr = node.right;
            return node.val;
        }
        return -1;
    }

    hasNext(): boolean {
        if (this.isNull) return false;
        if (this.curr != null || this.s.length > 0) {
            return true;
        } else {
            return false;
        }
    }
}
