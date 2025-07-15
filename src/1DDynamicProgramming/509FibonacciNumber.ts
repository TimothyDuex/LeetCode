function fib(n: number): number {
    // Initialize
    if (n == 0) return 0;
    let prev = 0;
    let curr = 1;
    // Solve DP
    for (let i = 2; i <= n; i++) {
        const temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    // Return desired dp value
    return curr;
};