class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
let tem= nums.sort((a,b)=>a-b)
        for(let i =0;i<=tem.length-1;i++){
            if(tem[i] === tem[i+1]) {
                return true
            }
        }
        return false
    }
}
