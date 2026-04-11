class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let set = new Set()
        for(let i =0; i< 9;i++){
            for(let j =0;j< 9; j++){
                let val = board[i][j]
                if(val === ".") continue
                let rowBox  = `row-${i}-${val}`
                let colBox = `col-${j}-${val}`
                let boxRowCol = `box-${Math.floor(i/3)}-${Math.floor(j/3)}-${val}`
                if(set.has(rowBox) || set.has(colBox) || set.has(boxRowCol)) return false
                set.add(rowBox)
                set.add(colBox)
                set.add(boxRowCol)
            }

        }
        return true
    }
}
