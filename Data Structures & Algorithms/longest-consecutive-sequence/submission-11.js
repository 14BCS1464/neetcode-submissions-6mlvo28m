class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ==0) return 0
        let set = new Set(nums)
        let maxCount =-Infinity
        for(let data of set){
            if(!set.has(data-1)){
                let count =0;
                let current =data
                while(set.has(current)){
                    count++
                    current++
                } 
                    maxCount= Math.max(maxCount,count)
            }
        

        }
        return maxCount
    }
}
