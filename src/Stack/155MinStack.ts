/**
 * The MinStack class:
 *
 * MinStack() initializes the stack object.
 * void push(int val) pushes the element val onto the stack.
 * void pop() removes the element on the top of the stack.
 * int top() gets the top element of the stack.
 * int getMin() retrieves the minimum element in the stack.
 *
 * You must implement a solution with O(1) time complexity for each function.
 *
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
class MinStack {
    private stack: minStackEntry[];

    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const newMin = this.stack.length
        ? Math.min(this.stack[this.stack.length - 1].min, val)
        : val;
        this.stack.push({value: val, min: newMin});
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1].value;
    }

    getMin(): number {
        return this.stack[this.stack.length - 1].min;
    }
}

/**
 * Interface to hold both value and current Min val of stack
 */
interface minStackEntry {
    value: number;
    min: number;
}
