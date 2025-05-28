/**
 * Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * @param height integer array
 */
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(area, maxArea);
        if (height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    return maxArea;
};