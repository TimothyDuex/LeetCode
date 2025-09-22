/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
class Router {
    private memoryLimit: number;
    private packets = new Set<string>();

    constructor(memoryLimit: number) {
        this.memoryLimit = memoryLimit;
    }

    addPacket(source: number, destination: number, timestamp: number): boolean {
        const stringifiedPacket = JSON.stringify([source, destination, timestamp]);
        if (this.packets.has(stringifiedPacket)) {
            return false;
        }
        this.packets.add(stringifiedPacket);
        if (this.packets.size > this.memoryLimit) {
            for (const packet of this.packets) {
                this.packets.delete(packet);
                break;
            }
        }
        return true;
    }

    forwardPacket(): number[] {
        if (this.packets.size > 0) {
            for (const packet of this.packets) {
                this.packets.delete(packet);
                return JSON.parse(packet) as number[];
            }
        }
        return [];
    }

    getCount(destination: number, startTime: number, endTime: number): number {
        let count = 0;
        for (const packet of this.packets) {
            const packetArray: number[] = JSON.parse(packet);
            // Short cut the loop if possible
            if (startTime > packetArray[2]) {
                continue;
            }
            if (endTime < packetArray[2]) {
                break;
            }
            if (packetArray[1] == destination) {
                if (startTime <= packetArray[2] && endTime >= packetArray[2]) {
                    count++;
                }
            }
        }
        return count;
    }
}
