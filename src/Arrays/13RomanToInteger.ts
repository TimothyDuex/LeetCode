/**
 * Given a roman numeral, convert it to an integer.
 *
 * @param s roman numeral as a string
 */
function romanToInt(s: string): number {
    // Create mappings from symbol to number
    const romanToIntMap = new Map<string, number>();
    romanToIntMap.set("I", 1);
    romanToIntMap.set("V", 5);
    romanToIntMap.set("X", 10);
    romanToIntMap.set("L", 50);
    romanToIntMap.set("C", 100);
    romanToIntMap.set("D", 500);
    romanToIntMap.set("M", 1000);

    let total = romanToIntMap.get(s.charAt(s.length - 1))!;
    for (let i = s.length - 2; i >= 0; i--) {
        if (romanToIntMap.get(s.charAt(i))! < romanToIntMap.get(s.charAt(i+1))!) {
            total -= romanToIntMap.get(s.charAt(i))!;
        } else {
            total += romanToIntMap.get(s.charAt(i))!;
        }
    }
    return total;
};