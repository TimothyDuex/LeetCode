/**
 * The values of exactly two nodes of the tree were swapped by mistake.
 * Recover the tree without changing its structure.
 *
 * @param root root node of binary search tree.
 */
function recoverTree(root: TreeNode | null): void {
    let nums: number[] = [];
    inorder(root, nums);
    let swapped = findTwoSwapped(nums);
    recover(root, 2, swapped[0], swapped[1]);
}

function inorder(root: TreeNode | null, nums: number[]): void {
    if (!root) return;
    inorder(root.left, nums);
    nums.push(root.val);
    inorder(root.right, nums);
}

function findTwoSwapped(nums: number[]): [number, number] {
    const n = nums.length;
    let x = -1,
        y = -1;
    let swappedFirstOccurrence = false;

    for (let i = 0; i < n - 1; ++i) {
        if (nums[i + 1] < nums[i]) {
            y = nums[i + 1];
            if (!swappedFirstOccurrence) {
                x = nums[i];
                swappedFirstOccurrence = true;
            } else {
                break;
            }
        }
    }
    return [x, y];
}

function recover(
    r: TreeNode | null,
    count: number,
    x: number,
    y: number,
): void {
    if (r) {
        if (r.val === x || r.val === y) {
            r.val = r.val === x ? y : x;
            if (--count === 0) return;
        }
        recover(r.left, count, x, y);
        recover(r.right, count, x, y);
    }
}
