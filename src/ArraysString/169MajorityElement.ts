/**
 * Given an array nums of size n, return the majority element.
 *
 * @param nums array of numbers
 */
function majorityElement(nums: number[]): number {
    /*
     * Solution if wanting to sort and then get center index.
     *
     * nums.sort((a, b) => a - b);
     * return nums[Math.floor(nums.length / 2)];
     */
    
    // Solution with hashmap below
    const map = numberArrayToMap(nums);
    let currentMaxKey: number = nums[0];
    let currentMaxValue: number = map.get(nums[0])!;
    for (let [key, value] of map) {
        if (value > currentMaxValue) {
            currentMaxKey = key;
            currentMaxValue = value;
        }
    }
    return currentMaxKey;
};

function numberArrayToMap(input: number[]): Map<number, number> {
    const map = new Map();
    for (let num of input) {
        map.set(num, (map.get(num) || 1) + 1);
    }
    return map;
}
