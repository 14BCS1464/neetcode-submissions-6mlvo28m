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
        if(!head|| !head.next || !head.next.next ) return
        let slow = head
        let fast = head  
        while(fast && fast.next){
            slow= slow.next
            fast = fast.next.next

        }
    
     let prve = null
     let  current =  slow.next
     slow.next = null
     while(current){
        let next = current.next
        current.next = prve
        prve= current 
        current = next 

     }
     let first =head 
     let second = prve
     while(second){
        let t1= first.next
        let t2 = second.next

        first.next = second
        second.next  = t1

        first = t1
    second =t2
     }
    }
}
