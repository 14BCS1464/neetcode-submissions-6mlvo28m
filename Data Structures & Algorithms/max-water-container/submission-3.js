class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start =0
        let end = heights.length-1
        let maxWater = -Infinity
        while(start < end){
            let maxHeight = Math.min(heights[start],heights[end])
            let width = end-start
            let area = maxHeight*width
            maxWater = Math.max(area,maxWater)
            if(heights[start] < heights[end]) start++
            else end--
        }
        return maxWater
    }
}
