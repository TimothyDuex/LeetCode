/**
 * Delete the middle node, and return the head of the modified linked list.
 *
 * @param head head node of linked list
 */
function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    const dummyHead = new ListNode(0, head);
    let prev = dummyHead;
    let slow = head;
    let fast: ListNode | null | undefined = head.next;
    // Find Middle
    while (fast) {
        prev = prev.next!;
        slow = slow.next!;
        fast = fast.next?.next;
    }
    // Delete middle
    prev.next = slow.next;
    return dummyHead.next;
};