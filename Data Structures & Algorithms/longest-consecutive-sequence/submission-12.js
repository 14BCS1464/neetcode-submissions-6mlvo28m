class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(arr) {
        if(arr.length ==0) return 0
        let set  = new Set(arr)
        let maxCount = -Infinity
        for(let i=0;i<=arr.length-1;i++){
            if(!set.has(arr[i]-1)){
                let stat =0
                let current = arr[i]
                while(set.has(current)){
                    stat++
                    current++

                }
                maxCount= Math.max(maxCount,stat)

            }
        }
return maxCount
    }
}
