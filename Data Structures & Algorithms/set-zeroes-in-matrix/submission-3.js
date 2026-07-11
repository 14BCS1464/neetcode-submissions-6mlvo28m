class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(mat) {
        let row = mat.length;
        let col = mat[0].length;
        let rowMaker = new Array(row).fill(0);
        let colMaker = new Array(col).fill(0);
        for (let i = 0; i <= row - 1; i++) {
            for (let j = 0; j <= col - 1; j++) {
                if (mat[i][j] === 0) {
                    rowMaker[i] = 1;
                    colMaker[j] = 1;
                }
            }
        }
        for (let i = 0; i <= row - 1; i++) {
            for (let j = 0; j <= col - 1; j++) {
                if (rowMaker[i] === 1 || colMaker[j] === 1) {
                    mat[i][j] = 0;
                }
            }
        }
        return mat
    }
}
