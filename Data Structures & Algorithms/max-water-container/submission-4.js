class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start =0
        let end  = heights.length-1
        let maxCount =-Infinity
        while(start < end){
            let minHeight = Math.min(heights[start],heights[end])
            let width = end - start
            let area = minHeight*width
            maxCount = Math.max(area,maxCount)
            if(heights[start] < heights[end]) start++
            else end--
        }
        return maxCount
    }
}
