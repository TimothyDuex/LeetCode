/**
 * Partition the linked list suce that all nodes less than x come
 * before nodes greater than or equal to x.
 *
 * @param head head of linked list
 * @param x value
 */
function partition(head: ListNode | null, x: number): ListNode | null {
    // Null Check
    if (head === null) return null;
    // Initialize
    const dummyRemovalListHead = new ListNode(0);
    let removalListPtr = dummyRemovalListHead;

    // Traverse and Remove elements that should be removed
    let startToRemove = false;
    const dummyHead = new ListNode(0, head);
    let prevPtr = dummyHead;
    let ptr: ListNode | null = head;
    while (ptr != null) {
        if (!startToRemove && ptr.val == x) {
            startToRemove = true;
        }
        if (startToRemove && ptr.val < x) {
            const temp: ListNode | null = ptr.next;
            removalListPtr = removeNodeAddToNewLinkedList(prevPtr, ptr, removalListPtr);
            ptr = temp;
            continue;
        }
        ptr = ptr.next;
        prevPtr = prevPtr.next!;
    }
    // Check if anything to insert
    if (!dummyRemovalListHead.next) {
        return dummyHead.next;
    }
    // Insert removal list
    prevPtr = dummyHead;
    ptr = head;
    let inserted =  false;
    while (!inserted && ptr != null) {
        if (ptr.val >= x) {
            prevPtr.next = dummyRemovalListHead.next;
            removalListPtr.next = ptr;
            inserted = true;
        }
        ptr = ptr.next;
        prevPtr = prevPtr.next!;
    }

    return dummyHead.next;
};

/**
 * Removes a linked list node in place and adds to list. Returns new removal list tail.
 */
function removeNodeAddToNewLinkedList(prev: ListNode, toRemove: ListNode, tailOfNewList: ListNode) {
    prev.next = toRemove.next;
    toRemove.next = null;
    tailOfNewList.next = toRemove;
    return tailOfNewList.next;
}