/**
 * Return the middle node.
 * Return the second middle if there are two.
 *
 * @param head head of linked list
 */
function middleNode(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    let slow = head;
    let fast = head.next;
    while(fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    if (fast) return slow.next;
    return slow;
};