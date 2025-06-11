/**
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 */
class RandomizedSet {
    private hashMap: Map<number, number>;
    private array: number[];

    constructor() {
        this.hashMap = new Map<number, number>();
        this.array = [];
    }

    /**
     * Inserts an item val into the set if not present.
     * Returns true if the item was not present, false otherwise.
     *
     * @param val input number
     */
    insert(val: number): boolean {
        if (this.hashMap.has(val)) {
            return false;
        } else {
            this.hashMap.set(val, this.array.length);
            this.array.push(val);
            return true;
        }
    }

    /**
     * Removes an item val from the set if present.
     * Returns true if the item was present, false otherwise.
     *
     * @param val input number
     */
    remove(val: number): boolean {
        if (this.hashMap.has(val)) {
            // 1. Delete from Hash Map, storing the array index it was at
            const arrayIndex = this.hashMap.get(val);
            this.hashMap.delete(val);
            // 2. Clear from array
            // If end of array we can just pop from array
            if (arrayIndex == this.array.length - 1) {
                this.array.pop();
            } else {
                // Else we replace the end into the index and update the hash map
                const endOfArray = this.array.pop();
                this.array[arrayIndex!] = endOfArray!;
                this.hashMap.set(endOfArray!, arrayIndex!);
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * Returns a random element from the current set of elements
     * (it's guaranteed that at least one element exists when this method is called).
     * Each element must have the same probability of being returned.
     */
    getRandom(): number {
        const random = Math.floor(Math.random() * this.array.length);
        return this.array[random];
    }
}