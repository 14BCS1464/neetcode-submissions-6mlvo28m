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
     if(!head || !head.next || !head.next.next) return 
     let fast = head
     let slow = head
     while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next 

     }  
     let pre = null
     let current = slow.next
     slow.next = null

     while(current){
        let  nextNode= current.next
        current.next = pre
        pre= current
        current = nextNode
     } 
     let first  = head
     let second = pre
     while(second){
        let t1 = first.next
        let t2 = second.next 

first.next = second
second.next = t1

first = t1
second = t2
     }
     
     
    }
}
