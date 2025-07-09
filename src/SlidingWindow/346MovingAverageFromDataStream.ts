/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
class MovingAverage {
    private size: number;
    private window: number[];

    constructor(size: number) {
        this.size = size;
        this.window = [];
    }

    next(val: number): number {
        this.window.push(val);
        if (this.window.length > this.size) {
            this.window.shift();
        }
        return this.window.reduce((prev, curr) => prev + curr, 0) / this.window.length;
    }
}
