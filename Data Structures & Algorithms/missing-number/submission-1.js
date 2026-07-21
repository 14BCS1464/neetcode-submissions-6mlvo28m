class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let tempSum = (n*(n+1))/2
        let totalSudm = nums.reduce((acc,currentItem)=> acc+currentItem,0)
        return tempSum - totalSudm
    }
}
