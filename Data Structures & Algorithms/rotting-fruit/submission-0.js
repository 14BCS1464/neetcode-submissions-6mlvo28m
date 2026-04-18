class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let row = grid.length;
        let col = grid[0].length;

        let queue = [];
        let freshCount = 0;
        for (let i = 0; i <= row - 1; i++) {
            for (let j = 0; j <= col - 1; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j, 0]);
                } else if (grid[i][j] === 1) {
                    freshCount += 1;
                }
            }
        }

        if (freshCount === 0) return 0;
        let maxTime = -Infinity;
        console.log(queue);
        while (queue.length > 0) {
            const [r, c, t] = queue.shift();
            if (t > maxTime) maxTime = t;
            if (r - 1 >= 0 && grid[r - 1][c] === 1) {
                grid[r - 1][c] = 2;
                queue.push([r - 1, c, t + 1]);
                freshCount--;
            }
            if (r + 1 < row && grid[r + 1][c] === 1) {
                grid[r + 1][c] = 2;
                queue.push([r + 1, c, t + 1]);
                freshCount--;
            }

            if (c - 1 >= 0 && grid[r][c - 1] === 1) {
                grid[r][c - 1] = 2;
                queue.push([r, c - 1, t + 1]);
                freshCount--;
            }

            if (c + 1 < col && grid[r][c + 1] === 1) {
                grid[r][c + 1] = 2;
                queue.push([r, c + 1, t + 1]);
                freshCount--;
            }
        }
        return freshCount === 0 ?maxTime:-1 ;
    }
}
