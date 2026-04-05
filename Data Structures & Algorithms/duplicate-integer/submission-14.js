class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const arr= nums.sort((a,b)=>b-a)
        for(let i =1;i<=arr.length;i++){
            if(arr[i-1]== arr[i]) return true

        }
        return false
    }
}
