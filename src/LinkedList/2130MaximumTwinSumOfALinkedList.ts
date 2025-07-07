/**
 * Given the head of a linked list with even length, return the maximum twin sum of the linked list.
 *
 * The ith node (0-indexed) of the linked list is
 * known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
 *
 * @param head head of even length linked list
 */
function pairSum(head: ListNode | null): number {
    if (head === null) {
        return 0;
    }
    let fast: ListNode | null | undefined = head.next;
    let slow: ListNode | null = head;
    let movesToHalf = 0;
    while (fast != null) {
        slow = slow.next!;
        fast = fast.next?.next;
        movesToHalf++;
    }
    const twinSums: number[] = new Array(movesToHalf).fill(0);
    for (let i = 0; i < movesToHalf; i++) {
        twinSums[i] += head!.val;
        head = head!.next;
        twinSums[twinSums.length - (i + 1)] += slow!.val;
        slow = slow!.next;
    }
    return twinSums.reduce((acc, cur) => Math.max(acc, cur), 0);
};