class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
         const n = nums.length;
  const output = new Array(n);
const prefix = new Array(n)
const suffix = new Array(n)
prefix[0] =1
for(let i =1;i<= n-1;i++){
    prefix[i] = prefix[i-1]* nums[i-1]
}
  suffix[n-1] =1
  for(let i =n-2;i>=0;i--){
    suffix[i] = suffix[i+1]*nums[i+1]
  }

  for(let i =0;i<= n-1;i++){
    output[i] = prefix[i]*suffix[i]
  }

  return output;
    }
}
