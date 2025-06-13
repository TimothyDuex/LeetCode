/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
class SmallestInfiniteSet {
    private lowestCount: number;
    private addedBack: number[];

    constructor() {
        this.lowestCount = 1;
        this.addedBack = [];
    }

    popSmallest(): number {
        if (
            this.addedBack.length > 0 &&
            this.addedBack[this.addedBack.length - 1] < this.lowestCount
        ) {
            return this.addedBack.pop()!;
        } else {
            return this.lowestCount++;
        }
    }

    addBack(num: number): void {
        if (num < this.lowestCount) {
            this.addedBack.push(num);
            this.addedBack = this.addedBack.sort((a, b) => b - a);
        } else {
            return;
        }
    }
}
