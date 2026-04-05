class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let key  = s1.split("").sort().join()
        for(let i =0;i<= s2.length-1;i++){
            for(let j =i;j<= s2.length-1;j++){
            let final = s2.slice(i,j+1).split("").sort().join()
            if(final === key) return  true
            }
        }
         return false

    }
}
