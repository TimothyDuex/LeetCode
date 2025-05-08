/**
 * Given an integer array nums where the elements are sorted in
 * ascending order, convert it to a height-balanced binary
 * search tree.
 *
 * @param nums sorted ascending order number array
 */
function sortedArrayToBST(nums: number[]): TreeNode | null {
    // Null Check
    if (nums == null) {
        return null;
    }
    // Recursively Create BST
    return createTree(nums, 0, nums.length - 1);
};

const createTree = (nums: number[], start: number, end: number): TreeNode | null => {
    if (start > end) {
        return null;
    }
    const middleOfTree = Math.floor((end - start) / 2) + start;
    const newNode = new TreeNode();
    newNode.val = nums[middleOfTree];
    newNode.left = createTree(nums, start, middleOfTree - 1);
    newNode.right = createTree(nums, middleOfTree + 1, end);
    return newNode;
}