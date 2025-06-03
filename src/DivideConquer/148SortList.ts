/**
 * Return the list after sorting it in ascending order.
 *
 * @param head head of linked list
 */
function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    // Merge Sort
    const middle = getMid(head);
    const left = sortList(head);
    const right = sortList(middle);
    return merge(left, right);

    /**
     * Merge Two Linked Lists
     */
    function merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        const dummyHead = new ListNode(0);
        let tail = dummyHead;
        while(list1 && list2) {
            if (list1.val > list2.val) {
                tail.next = list2;
                tail = tail.next;
                list2 = list2.next;
            } else {
                tail.next = list1;
                tail = tail.next;
                list1 = list1.next;
            }
        }
        tail.next = list1 ? list1 : list2;
        return dummyHead.next;
    }

    /**
     * Find middle node of linked list.
     */
    function getMid(head: ListNode | null): ListNode | null {
        let midPrev = null;
        while (head && head.next) {
            midPrev = midPrev === null ? head : midPrev.next;
            head = head.next.next;
        }
        let mid = midPrev!.next;
        midPrev!.next = null;
        return mid;
    }
};
