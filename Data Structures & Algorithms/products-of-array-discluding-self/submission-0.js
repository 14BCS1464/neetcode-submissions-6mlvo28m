class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          let result = []
for(let i =0;i<= nums.length-1;i++){
    let mul =1
    for(let j =0;j< nums.length;j++){
        if(i != j){
            mul= mul*nums[j]
        }
        

    }
    result.push(mul)
    
}
  return result
    }
  
}
