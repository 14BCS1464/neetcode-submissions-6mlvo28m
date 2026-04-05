class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ===0) return 0
        if(nums.length == 1) return 1
    let set  = new Set(nums)
    let largest = -1
    for(let data of nums){
        if(!set.has(data-1)){
            let start =1
            let current =data
             while(set.has(current+1)){
                current+=1
                start++
             }

              largest = Math.max(largest,start)
        }
       
    }
    return largest
    }
    
}
