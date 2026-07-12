class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let row = grid.length;
        let col = grid[0].length;
        let maxLand = 0;
        const calculateLand = (r, c) => {
            if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] == 0) return 0;

            grid[r][c] = 0;

            return (
                1 +
                calculateLand(r + 1, c) +
                calculateLand(r - 1, c) +
                calculateLand(r, c + 1) +
                calculateLand(r, c - 1)
            );
        };
        for (let i = 0; i <= row - 1; i++) {
            for (let j = 0; j <= col - 1; j++) {
                if (grid[i][j] === 1) {
                    let land = calculateLand(i, j);
                    maxLand = Math.max(maxLand, land);
                }
            }
        }
        return maxLand;
    }
}
