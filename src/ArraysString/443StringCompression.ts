/**
 * Compress chars using the following algorithm:
 *
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 *
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead,
 * be stored in the input character array chars. Note that group lengths that are
 * 10 or longer will be split into multiple characters in chars.
 *
 * After you are done modifying the input array, return the new length of the array.
 *
 * @param chars array of characters
 */
function compress(chars: string[]): number {
    const originalLength = chars.length;
    let currentCount: number = 0;
    let currentLetter: string = '';
    for (let i = 0; i < originalLength; i++) {
        let endLetter = chars.pop()!;
        if (endLetter != currentLetter) {
            if (currentCount != 0) {
                // Push onto chars in format
                if (currentCount != 1) {
                    while (currentCount > 0) {
                        chars.unshift(String(currentCount % 10));
                        currentCount = Math.floor(currentCount / 10);
                    }
                }
                chars.unshift(currentLetter);
            }
            // Reset for next iteration
            currentLetter = endLetter;
            currentCount = 1;
        } else {
            currentCount++;
        }
    }
    // One last push
    if (currentCount != 1) {
        while (currentCount > 0) {
            chars.unshift(String(currentCount % 10));
            currentCount = Math.floor(currentCount / 10);
        }
    }
    chars.unshift(currentLetter);
    // Return the new length of chars
    return chars.length;
};