/**
 * Reverse only all the vowels in the string and return it.
 *
 * @param s string
 */
function reverseVowels(s: string): string {
    const sArray = [...s];
    // Vowels set
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    // Reverse vowels
    let ptr1 = 0;
    let ptr2 = s.length - 1;
    while (ptr1 < ptr2) {
        if (vowels.has(s[ptr1]) && vowels.has(sArray[ptr2])) {
            const temp = sArray[ptr1];
            sArray[ptr1] = sArray[ptr2];
            sArray[ptr2] = temp;
            ptr1++;
            ptr2--;
        } else if (vowels.has(s[ptr1])) {
            ptr2--;
        } else if (vowels.has(s[ptr2])) {
            ptr1++;
        } else {
            ptr1++;
            ptr2--;
        }
    }
    return sArray.join('');
};