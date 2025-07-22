/**
 * Reorder the list of size n to be L0, Ln, L1, Ln-1, ...
 *
 * @param head head of linked list
 */
function reorderList(head: ListNode | null): void {
    if (head == null) return;
    // Traverse to find middle of List
    let prev: ListNode | undefined | null = new ListNode(0, head);
    let slow: ListNode | undefined | null = head;
    let fast: ListNode | null | undefined = head.next;
    while (fast) {
        prev = prev!.next;
        slow = slow.next!;
        fast = fast.next?.next;
    }
    prev!.next = null; // Break List into two
    // Reverse Second half of Link List, starting at slow
    prev = null;
    while (slow) {
        let temp: ListNode | undefined | null = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    // Merge Two Lists alternating
    let head1: ListNode | null = head;
    let head2: ListNode | null = prev;
    let tail = null
    while (head1 || head2) {
        if (head1 && head2) {
            const head1next: ListNode | null = head1.next;
            const head2next: ListNode | null = head2.next;
            head1.next = head2;
            head2.next = head1next;
            if (head1next) {
                tail = head1next;
            } else {
                tail = head2;
            }
            head1 = head1next;
            head2 = head2next;
        } else if (head1) {
            tail!.next = head1;
            break;
        } else if (head2){
            tail!.next = head2;
            break;
        }
    }
};