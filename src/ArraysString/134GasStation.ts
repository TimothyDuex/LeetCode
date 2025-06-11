/**
 * There are n gas stations along a circular route.
 *
 * You have a car with an unlimited gas tank and it costs cost[i]
 * of gas to travel from the ith station to its next (i + 1)th station.
 * You begin the journey with an empty tank at one of the gas stations.
 *
 * Return the starting gas station's index if you can travel around the circuit
 * once in the clockwise direction, otherwise return -1.
 * If there exists a solution, it is guaranteed to be unique.
 *
 * @param gas integer array representing amount gas at station i
 * @param cost integer array representing cost of gas at station i
 */
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGain = 0;
    let answer = 0;
    let currentRoute = 0;
    for (let i = 0; i < gas.length; i++) {
        const station = gas[i] - cost[i];
        totalGain += station;
        currentRoute += station;
        if (currentRoute >= 0) {
            continue;
        } else {
            answer = i + 1;
            currentRoute = 0;
        }
    }
    if (totalGain >= 0) {
        return answer;
    } else {
        return -1;
    }
};