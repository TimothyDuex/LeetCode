/**
 * Return true if n new flowers can be planted in the flowerbed without
 * violating the no-adjacent-flowers rule and false otherwise.
 *
 * @param flowerbed integer array
 * @param n integer
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let planted = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            i == 0 &&
            flowerbed[i] != 1 &&
            flowerbed[i + 1] != 1
        ) {
            planted += 1;
            flowerbed[i] = 1;
        } else if (
            i == flowerbed.length - 1 &&
            flowerbed[i - 1] != 1 &&
            flowerbed[i] != 1
        ) {
            planted += 1;
            flowerbed[i] = 1;
        } else if (
            flowerbed[i - 1] != 1 &&
            flowerbed[i] != 1 &&
            flowerbed[i + 1] != 1
        ) {
            planted += 1;
            flowerbed[i] = 1;
        }
        if (planted >= n) {
            return true;
        }
    }
    return false;
};