class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(arr) {
        let left =0
let right  = arr.length-1
let maxWater  = -1
while(left< right){
    let minHeight = Math.min(arr[left],arr[right])
    let width = right-left
    maxWater= Math.max(maxWater,minHeight*width)
    if(arr[left]< arr[right]){
        left++
    }else{
        right--
    }
}
return maxWater
    }
}
