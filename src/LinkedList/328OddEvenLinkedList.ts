/**
 * Group all the nodes with odd indices together followed by
 * the nodes with even indices, and return the reordered list.
 *
 * @param head head of singly linked list
 */
function oddEvenList(head: ListNode | null): ListNode | null {
    if (head == null) return null;
    let evenTail = head;

    let oddHead = head.next;
    let oddTail = oddHead;
    let head2: ListNode | null | undefined = head;
    while (head2 != null) {
        head2 = head2.next?.next;
        if (head2) {
            evenTail.next = head2;
            evenTail = evenTail.next!;
            if (head2.next) {
                oddTail!.next = head2.next;
                oddTail = oddTail!.next;
            }
        }
    }
    // Attach Odd Head if it exists
    if (oddHead) {
        oddTail!.next = null;
        evenTail.next = oddHead;
    }
    return head;
};