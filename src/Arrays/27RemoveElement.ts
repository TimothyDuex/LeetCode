function removeElement(nums: number[], val: number): number {
    let junkNums = 0;
    const numsLength = nums.length;
    let w = 0;

    for(let r = 0; r < numsLength; r++) {
        if (nums[r] === val) {
            junkNums++;
        } else {
            nums[w] = nums[r];
            w++;
        }
    }

    return numsLength - junkNums;
};