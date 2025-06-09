/**
 * Return the numebr of trailing zeroes in n!.
 *
 * @param n integer
 */
function trailingZeroes(n: number): number {
    // Initialize zero count
    let zeroCount = 0;
    // Start from 5 until n with an increment of 5 at each iteration
    for (let i = 5; i <= n; i += 5) {
        // Set current factor as i at each iteration
        let currentFactor = i;
        // Until the current factor is divisible by 5, keep incrementing the zero count
        while (currentFactor % 5 == 0) {
            zeroCount++;
            currentFactor /= 5;
        }
    }

    return zeroCount;
}