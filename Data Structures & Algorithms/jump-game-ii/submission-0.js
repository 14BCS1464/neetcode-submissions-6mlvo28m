class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let currentInedex = 0;
        let jump = 0;
        let maxjump = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            maxjump = Math.max(maxjump, nums[i]+i);
            if (i === currentInedex) {
                jump++;
                currentInedex = maxjump;
            }
        }
        return jump
    }
}
