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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
      let  first = head
    for(let  i =0;i< n;i++){
        first = first.next
    }
    if(!first) return  head.next
    let slow = head
    while( first && first.next){
        first = first.next
        slow = slow.next
    }
    slow.next = slow.next.next
     return head
    }
   
}
