/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let prev = null;
        let current = slow.next;
        slow.next = null;
        while (current) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        let first = head;
        let second = prev;
        while (second) {
            let n1 = first.next;
            let n2 = second.next;
            first.next = second;
            second.next = n1;
            first = n1;
            second = n2;
        }
    }
}
