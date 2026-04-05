class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let  sortData = nums.sort((a,b)=>a-b)
        for(let i = 0; i<= sortData.length-1;i++){
            if(sortData[i] === sortData[i+1]){
                return true
            }
        }
        return false
    }
}
