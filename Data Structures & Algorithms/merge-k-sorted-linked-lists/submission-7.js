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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
      let tempArr =[]
      for(let i =0;i<= lists.length-1;i++){
        let current = lists[i]
        while(current){
            tempArr.push(current.val)
            current = current.next 
        }

      }
    tempArr.sort((a,b)=>a-b)
const dummy = new ListNode(-1)
let current = dummy
for(let i =0;i<= tempArr.length-1;i++){
    current.next= new ListNode(tempArr[i]) 
    current = current.next 
}

return dummy.next
    }


}
