/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
class Solution {
    private prefixSums: number[];
    private cumulativeSum: number;

    constructor(w: number[]) {
        this.cumulativeSum = 0;
        this.prefixSums = [];
        for (let i = 0; i < w.length; i++) {
            this.cumulativeSum += w[i];
            this.prefixSums[i] = this.cumulativeSum.valueOf();
        }
    }

    pickIndex(): number {
        const random = Math.random() * this.cumulativeSum;
        let left = 0;
        let right = this.prefixSums.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (this.prefixSums[mid] < random) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
}
