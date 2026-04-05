class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let fre={}
        for(let i =0;i<= nums.length-1;i++){
            fre[nums[i]] = fre[nums[i]] ?fre[nums[i]]+1 :1
        }
       
    return  Object.keys(fre).sort((a,b)=>fre[b] - fre[a]).slice(0,k)

    }
}
