/**
 * Return the index of the first occurrence of needle in haystack, or
 * -1 if needle is not part of haystack.
 *
 * @param haystack input string for haystack
 * @param needle input string for needle
 */
function strStr(haystack: string, needle: string): number {
    // Non built-in function solution
    for(let i = 0; i < haystack.length - (needle.length - 1); i++){
        for (let j = 0; j < needle.length; j++){
            if (haystack[i + j] != needle[j]){
                break;
            } else {
                if (j == needle.length - 1) {
                    return i;
                }
            }
        }
    }
    return -1;
    /*
    return haystack.indexOf(needle);
     */
};