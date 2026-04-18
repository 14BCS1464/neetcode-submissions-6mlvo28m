class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxJump =0
        for(let i =0;i<= maxJump;i++){
            maxJump =Math.max(maxJump,nums[i]+i)
            if(maxJump >= nums.length-1) return true
        }
        return false
    }
}
