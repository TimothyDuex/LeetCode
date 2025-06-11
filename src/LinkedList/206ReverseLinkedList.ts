/**
 * Return the reversed list.
 *
 * @param head head of linked list
 */
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    let prev = null;
    let curr: ListNode | null = head;
    let next = null;
    while (curr != null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};