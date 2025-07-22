/**
 * Encodes a list of strings to a single string.
 */
function encode(strs: string[]): string {
    for (let i = 0; i < strs.length; i++) {
        strs[i] = strs[i].replace(/\//g, '//').concat('/:');

    }
    return strs.join('');
};

/**
 * Decodes a single string to a list of strings.
 */
function decode(s: string): string[] {
    const strs = [];
    let str = '';
    let i = 0;
    while (i < s.length) {
        if (
            i + 1 < s.length && s.charAt(i) == '/'
            && s.charAt(i + 1) == ':'
        ) {
            strs.push(str);
            str = '';
            i += 2;
        } else if (
            i + 1 < s.length && s.charAt(i) == '/'
            && s.charAt(i + 1) == '/'
        ) {
            str = str.concat('/');
            i += 2;
        } else {
            str = str.concat(s.charAt(i));
            i += 1;
        }
    }
    return strs;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */