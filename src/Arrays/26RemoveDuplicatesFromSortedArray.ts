function removeDuplicates(nums: number[]): number {
    const numLength = nums.length;

    let w = 1;
    for(let r = 1; r < numLength; r++) {
        if (nums[r] === nums[w-1]) {
            // do nothing let the reader advance
        } else {
            nums[w++] = nums[r];
        }
    }

    return w;
};