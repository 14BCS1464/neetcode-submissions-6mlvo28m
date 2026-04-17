class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let row = matrix.length
        let col = matrix[0].length
        let left =0
        let right  = row *col-1
        while(left <= right){
            let mid = Math.floor((left+right)/2)
             let innerRow = Math.floor(mid / col);
             let innnerCol = Math.floor(mid % col);
            if(matrix[innerRow][innnerCol] === target) return true
            else if(matrix[innerRow][innnerCol] < target) left = mid+1
            else right= mid-1
            
        }
        return false

    }
}
