/**
 * Remove the nth node from the end of the list and return its head.
 *
 * @param head head node of linked list
 * @param n nth node to remove
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let first = head;
    while (n != 0) {
        first = first!.next;
        n--;
    }
    if (first == null) {
        return head!.next;
    }
    let second = head;
    while (first.next != null) {
        first = first!.next;
        second = second!.next;
    }
    second!.next = second!.next!.next;
    return head;
};