class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let row = grid.length;
        let col = grid[0].length;
        let count = 0;
        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= row || c >= col || grid[r][c] !== "1") return;
            grid[r][c] = "0";
            dfs(r - 1, c);
            dfs(r + 1, c);
            dfs(r, c - 1);
            dfs(r, c + 1);
        }
        for (let i = 0; i <= row - 1; i++) {
            for (let j = 0; j <= col - 1; j++) {
                if (grid[i][j] === "1") {
                    dfs(i, j);
                    count += 1;
                }
            }
        }
        return count;
    }
}
