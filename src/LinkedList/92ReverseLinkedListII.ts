/**
 * Reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * @param head head node of linked list
 * @param left left node based on 1 indexing
 * @param right right node based on 1 indexing
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) {
        return null;
    }
    let current = head;
    let prev = null;
    // Traverse to start of where we want to reverse
    for (let i = 1; i < left; i++) {
        prev = current;
        current = current.next!;
    }
    if (prev) {
        prev.next = reverseList(current, right - left);
    } else {
        return reverseList(current, right - left);
    }
    return head;
};

function reverseList(head: ListNode, lengthToReverse: number): ListNode {
    // Initialize three pointers: curr, prev and next
    let curr = head;
    let prev: ListNode | null = null;
    let next;
    // Traverse all the nodes of Linked List
    let j = 0;
    while (curr !== null && j <= lengthToReverse) {
        // Store next
        next = curr.next;
        // Reverse current node's next pointer
        curr.next = prev;
        // Move pointers one position ahead
        prev = curr;
        curr = next!;
        j++;
    }
    head.next = curr;
    // Return the head of reversed linked list
    return prev!;
}
