/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */


class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this.boubbleUp(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.boubbleDown(0);
    return min;
  }
  isEmpty() {
    return this.heap.length === 0;
  }

  boubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex]
      ];
      index = parentIndex;
    }
  }
 boubbleDown(index) {
  let length = this.heap.length;

  while (true) {
    let leftIndex = 2 * index + 1;
    let rightIndex = 2 * index + 2;
    let smallest = index;

    if (
      leftIndex < length &&
      this.heap[leftIndex][0] < this.heap[smallest][0]
    ) {
      smallest = leftIndex;
    }

    if (
      rightIndex < length &&
      this.heap[rightIndex][0] < this.heap[smallest][0]
    ) {
      smallest = rightIndex;
    }

    if (smallest !== index) {
      [this.heap[smallest], this.heap[index]] =
        [this.heap[index], this.heap[smallest]];
      index = smallest;
    } else {
      break;
    }
  }
}
}



class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(!lists || lists.length === 0) return null
        let minheap = new MinHeap()
        for(let i =0;i<=lists.length-1;i++){
            if(lists[i]){
                minheap.push([lists[i].val,i,lists[i]])
            }
        }
        let dummyNode = new ListNode(-1)
        let current = dummyNode
        while(!minheap.isEmpty()){
            let [val,index,node]= minheap.pop()
            current.next = node
            current= current.next
            if(node.next){
                minheap.push([node.next.val,index,node.next])
            }


        }
        return dummyNode.next
        
  }
}
