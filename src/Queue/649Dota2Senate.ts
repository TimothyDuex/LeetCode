/**
 * Predict which party will finally announce the victory and change the Dota2 game.
 * The output should be "Radiant" or "Dire".
 *
 * In each round a senator can ban the senator behind them or announce victory. Assume each
 * senator makes the optimal round choice for their party.
 *
 * @param senate string of characters 'R' or 'D' representing n senators party allegiances
 */
function predictPartyVictory(senate: string): string {
    // Initialize
    const q = [];
    let totalRs = 0;
    let totalDs = 0;
    for (let i = 0; i < senate.length; i++) {
        q.push(senate.charAt(i));
        if (senate.charAt(i) == 'R') {
            totalRs++;
        } else {
            totalDs++;
        }
    }
    // Loop through queue taking action until one party remains
    let rsToRemove = 0;
    let dsToRemove = 0;
    while (q.length > 0) {
        const senator: string = q.shift()!;
        // Win cases
        if (senator === 'R' && totalDs == 0) {
            return "Radiant";
        }
        if (senator === 'D' && totalRs == 0) {
            return "Dire";
        }
        // Ban cases
        if (senator == 'R' && rsToRemove > 0) {
            rsToRemove--;
            totalRs--;
            continue;
        }
        if (senator == 'D' && dsToRemove > 0) {
            dsToRemove--;
            totalDs--;
            continue;
        }
        // Action cases
        if (senator == 'R' && totalDs > 0) {
            q.push(senator);
            dsToRemove++;
        }
        if (senator == 'D' && totalRs > 0) {
            q.push(senator);
            rsToRemove++;
        }
    }
    return "null";
};