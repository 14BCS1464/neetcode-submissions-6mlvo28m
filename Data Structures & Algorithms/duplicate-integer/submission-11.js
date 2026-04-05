class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
 let map = {}
    for (let i = 0; i <= nums.length - 1; i++) {
        if (map.hasOwnProperty(nums[i])) return true
        map[nums[i]] = nums[i]
    }
    console.log(JSON.stringify(map))
    return false
    }
}
