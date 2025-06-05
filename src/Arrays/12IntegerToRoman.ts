/**
 * Given an integer, convert it to Roman numeral.
 *
 * @param num integer
 */
function intToRoman(num: number): string {
    // Instantiate Number to Roman Maps
    const values: number[] = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    const symbols: string[] = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    let romanArray: string[] = [];
    while (num > 0) {
        for (let i = 0; i < values.length; i++) {
            if (num - values[i] >= 0) {
                num = num - values[i];
                romanArray.push(symbols[i]);
                break;
            }
        }
    }
    return romanArray.join("");
};