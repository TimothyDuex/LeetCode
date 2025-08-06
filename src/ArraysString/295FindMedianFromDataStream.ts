/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// Alternative faster way is to use two heaps and make sure to balance them at each insertion
class MedianFinder {
    private nums: number[];
    constructor() {
        this.nums = [];
    }

    addNum(num: number): void {
        let left = 0;
        let right = this.nums.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (this.nums[mid] == num) {
                left = mid;
                break;
            } else if (this.nums[mid] > num) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        this.nums.splice(left, 0, num);

    }

    findMedian(): number {
        if (this.nums.length % 2 == 0) {
            const mid = Math.floor(this.nums.length / 2);
            return (this.nums[mid] + this.nums[mid-1]) / 2;
        } else {
            return this.nums[Math.floor(this.nums.length / 2)];
        }
    }
}