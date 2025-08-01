import {MinPriorityQueue, PriorityQueue} from "@datastructures-js/priority-queue";

/**
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 * @param lists array of k linked-lists, each is presorted in ascending order
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const minHeap = new MinPriorityQueue<ListNode>((a) => a.val);
    for (const list of lists) {
        if (list != null) {
            minHeap.push(list);
        }
    }
    const dummyHead = new ListNode(0);
    let temp = dummyHead;
    while (minHeap.size() > 0) {
        temp.next = minHeap.pop()!;
        temp = temp.next;
        if (temp.next) minHeap.push(temp.next!);
        temp.next = null;
    }
    return dummyHead.next;
};