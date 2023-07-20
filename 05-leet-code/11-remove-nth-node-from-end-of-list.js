var removeNthFromEnd = function(head, n) {
    if (head == null || head.next == null) {
        return null;
    }

    let sentinel = new ListNode(0, head);
    let fast = head;
    let slow = sentinel;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast != null) {  n
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return sentinel.next;
};

var removeNthFromEnd = function(head, n) {
    let fast = head
    let slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
};