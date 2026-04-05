class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let frequ = {};
    for (let i = 0; i <= nums.length - 1; i++) {
        frequ[nums[i]] = frequ[nums[i]] ? frequ[nums[i]] + 1 : 1;
    }
   const dd= Object.keys(frequ)
    .sort((a, b) => frequ[b] - frequ[a]).splice(0,k)

   return dd
    }
}
