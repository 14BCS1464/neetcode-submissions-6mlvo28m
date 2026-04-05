class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(nums) {
        let start =0
        let end = nums.length-1
        let leftmax=0
        let rightmax=0
        let tapWater=0
        while(start<end){
            if(nums[start]<nums[end]){
                if(nums[start] >= leftmax){
leftmax= nums[start]
                }else{
                    tapWater += leftmax-nums[start]
                }
start++
            }else{
                if(nums[end]>= rightmax){
                    rightmax=nums[end]
                }
                else{
                     tapWater += rightmax-nums[end]
                }
                end--
            }
        }
        return tapWater
    }
}
