/**
 * Return the researcher's h-index.
 *
 * According to the definition of h-index on Wikipedia: The h-index
 * is defined as the maximum value of h such that the given
 * researcher has published at least h papers that have each
 * been cited at least h times.
 *
 * @param citations number of citations a researcher received for their ith paper
 */
function hIndex(citations: number[]): number {
    // Sort in ascending
    citations = citations.sort((a, b) => a - b);
    // Find h-index by linear search
    let i = 0;
    while (i < citations.length && citations[citations.length - 1 - i] > i) {
        i++;
    }
    return i; // after the while loop, i = i' + 1;
};