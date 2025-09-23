/**
 * Return the following:
 *
 * If version1 < version2, return -1.
 * If version1 > version2, return 1.
 * Otherwise, return 0.
 *
 * Version strings look like 1.1 or 1.0.0.0.1 as examples.
 *
 * @param version1 version string one
 * @param version2 version string two
 */
function compareVersion(version1: string, version2: string): number {
    const parts1 = version1.split('.');
    const parts2 = version2.split('.');
    let number1: number = 0;
    let number2: number = 0;
    // Compare based on both versions having more parts
    while (parts1.length > 0 && parts2.length > 0) {
        number1 = Number(parts1.shift()!);
        number2 = Number(parts2.shift()!);
        const comparison = compareNumbers(number1, number2);
        if (comparison !== 0) {
            return comparison;
        }
    }
    // Compare to look for if the version of the longer sequence in greater than 0
    number1 = 0;
    number2 = 0;
    while (parts1.length > 0 || parts2.length > 0) {
        if (parts1.length > 0) {
            number1 = Number(parts1.shift()!);
        }
        if (parts2.length > 0) {
            number2 = Number(parts2.shift()!);
        }
        const comparison = compareNumbers(number1, number2);
        if (comparison !== 0) {
            return comparison;
        }
    }
    return 0;
};

function compareNumbers(number1: number, number2: number): number {
    if (number1 < number2) {
        return -1;
    } else if (number1 > number2) {
        return 1;
    } else {
        return 0;
    }
}