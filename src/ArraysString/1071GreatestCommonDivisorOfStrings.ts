/**
 * Return the largest string x such that x divides both str1 and str2.
 *
 * @param str1 string
 * @param str2 string
 */
function gcdOfStrings(str1: string, str2: string): string {
    const smallerString = str1.length >= str2.length ? str2 : str1;
    const largerString = str1.length >= str2.length ? str1 : str2;
    for (let i = 0; i < smallerString.length; i++) {
        const patternLength = smallerString.length - i;
        if (
            largerString.length % (patternLength) == 0 &&
            smallerString.length % (patternLength) == 0
        ) {
            const pattern = smallerString.slice(0, patternLength);
            if (
                pattern.repeat(largerString.length / patternLength) === largerString &&
                pattern.repeat(smallerString.length / patternLength) === smallerString
            ) {
                return pattern;
            }
        }
    }
    return '';
};