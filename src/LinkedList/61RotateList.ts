/**
 * Rotate the list to the right by k places.
 *
 * @param head head of linked list
 * @param k integer
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (head == null) return null;
    // Find Length, we do this cause k could be so big
    const length = findLengthOfLinkedList(head);
    // Shrink k to be within list size
    k = k % length;
    if (k === 0) return head; // No rotation
    // Perform rotation
    let lead: ListNode | null = head;
    while (k > 0) {
        lead = lead!.next;
        k--;
    }
    let follower = head;
    while (lead!.next != null) {
        lead = lead!.next;
        follower = follower.next!;
    }
    const newHead = follower.next;
    follower.next = null;
    lead!.next = head;
    return newHead;
};

function findLengthOfLinkedList(head: ListNode | null): number {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}