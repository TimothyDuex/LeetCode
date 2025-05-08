/**
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 *
 * @param head start for linked list
 */
function hasCycle(head: ListNode | null): boolean {
    let walker: ListNode | null | undefined = head;
    let runner = head?.next;
    while (runner) {
        if (walker?.val === runner.val && walker.next === runner.next) {
            return true;
        }
        walker = walker?.next;
        runner = runner.next?.next;
    }
    // Runner reached the end so no cycle
    return false;
};