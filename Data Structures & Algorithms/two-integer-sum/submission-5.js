class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let set = new Map()
        for(let i =0;i<= nums.length-1;i++){
            let diff = target - nums[i] 
            if(set.has(diff)){
                return [i, set.get(diff)]
            }
            set.set(nums[i],i)
        }
        return [-1,-1]
    }
}
