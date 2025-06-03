/**
 * Return all possible permutations.
 *
 * @param nums array of distinct integers
 */
function permute(nums: number[]): number[][] {
    const permutations: number[][] = [];

    function backtrack(numList: number[], path: number[]) {
        if (path.length == nums.length) {
            permutations.push([...path]);
            return;
        }
        for (let [index, value] of numList.entries()) {
            path.push(value);
            // Remove num from numList
            let copyOfNumsList = [...numList];
            copyOfNumsList.splice(index, 1);
            backtrack([...copyOfNumsList], path);
            path.pop();
        }
    }

    backtrack(nums, []);
    return permutations;
};