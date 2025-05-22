/**
 * Write an algorithm to determine if a number n is happy.
 *
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
 * Those numbers for which this process ends in 1 are happy.
 *
 * @param n number
 */
function isHappy(n: number): boolean {
    const set = new Set();
    while (n != 1) {
        let digits = n;
        let sum = 0;
        while (digits > 0) {
            sum += Math.pow((digits % 10),2);
            digits = Math.floor(digits / 10);
        }
        if (set.has(sum)) {
            return false;
        } else {
            set.add(sum);
        }
        n = sum;
    }
    return true;
};