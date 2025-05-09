/**
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * @param list1 head of list one
 * @param list2 head of list two
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // Take care of empty lists
    if (!list1 && list2) {
        return list2;
    } else if (list1 && !list2) {
        return list1;
    } else if (!list1 && !list2) {
        return null;
    }
    // Set Head Node
    let headNode: ListNode | null;
    if (list1!.val < list2!.val) {
        headNode = list1;
        list1 = list1!.next;
    } else {
        headNode = list2;
        list2 = list2!.next;
    }
    // Iterate through lists inserting nodes as needed, using tempNode to store current end pointer of eventually merged linked list
    let tempNode = headNode;
    while (list1 || list2) {
        if(list1 && list2) {
            if (list1!.val < list2!.val) {
                tempNode!.next = list1;
                tempNode = tempNode!.next;
                list1 = list1!.next;
            } else {
                tempNode!.next = list2;
                tempNode = tempNode!.next;
                list2 = list2!.next;
            }
        } else if (list1) {
            tempNode!.next = list1;
            tempNode = tempNode!.next;
            list1 = list1!.next;
        } else {
            tempNode!.next = list2;
            tempNode = tempNode!.next;
            list2 = list2!.next;
        }
    }
    return headNode;
};