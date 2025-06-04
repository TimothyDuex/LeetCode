/**
 * Delete all nodes that have duplicate numbers
 *
 * @param head head of sorted linked list
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null) return null;
    const dummyHead = new ListNode(0);
    let prev = dummyHead;
    while(head != null) {
        const isDuplicateResult = isDuplicate(head);
        if (isDuplicateResult[0] && isDuplicateResult[1]) {
            head = isDuplicateResult[1];
        } else if (isDuplicateResult[0]) {
            prev.next = null;
            head = null;
        } else {
            prev.next = head;
            prev = prev.next;
            head = head.next;
        }
    }
    return dummyHead.next;
};

/**
 * If is duplicate returns first non-duplicate node.
 * If is not a duplicate returns null.
 *
 * @param head head of linked list
 */
function isDuplicate(head: ListNode | null): [boolean, ListNode | null] {
    if (head === null) return [false, null];
    if (head.val == head.next?.val) {
        const num = head.val;
        while(head && head.val == num) {
            head = head.next;
        }
        return [true, head];
    } else {
        return [false, null];
    }
}