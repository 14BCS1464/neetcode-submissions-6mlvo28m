class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length;
        let totalSum = (n * (n + 1)) / 2;
        return totalSum - nums.reduce((acc, item) => acc + item, 0);
    }
}
