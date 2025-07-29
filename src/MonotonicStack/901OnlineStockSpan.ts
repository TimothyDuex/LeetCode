/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
class StockSpanner {
    private stack: number[][];

    constructor() {
        this.stack = [];
    }

    next(price: number): number {
        let ans = 1;
        while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
            ans += this.stack.pop()![1];
        }
        this.stack.push([price, ans]);
        return ans;
    }
}
