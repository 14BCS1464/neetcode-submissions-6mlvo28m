class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(mat) {
        let n = mat.length;
        for (let i = 0; i <= n - 1; i++) {
            for (let j = i + 1; j <= n - 1; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
        // for (let i = 0; i <= n - 1; i++) {
        //     let start = 0;
        //     let end = mat[0].length - 1;
        //     while (start <= end) {
        //         [mat[i][start], mat[i][end]] = [mat[i][end], mat[i][start]];
        //         start++
        //         end--
        //     }
        // }
        for (let i = 0; i < n; i++) {
            mat[i].reverse();
        }
        return mat;
    }
}
