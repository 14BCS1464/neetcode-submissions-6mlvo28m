class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left  =0
        let right = height.length-1
        let leftMax =-1
        let rightMax =-1
        let maxWater =0
        while(left <=right){
            if(leftMax < rightMax){
                if(height[left] >= leftMax){
                     leftMax = height[left]
                }
                else {
                    maxWater += leftMax- height[left] 
                    }
                left++
            }else{
                if(height[right] >= rightMax){ 
                    rightMax = height[right]
                    }else{
                 maxWater += rightMax -height[right]
                    }
                 right--
            }
        }
        return maxWater
    }
}
