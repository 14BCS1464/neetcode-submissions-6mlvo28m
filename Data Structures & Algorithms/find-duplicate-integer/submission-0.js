class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let slow =0
        let fast =0
        do{
slow= nums[slow]
fast = nums[nums[fast]]
        }while(slow !== fast)
        fast =0
        while(fast != slow){
            slow =nums[slow]
            fast = nums[fast]
        }

       return slow 
    }
}
