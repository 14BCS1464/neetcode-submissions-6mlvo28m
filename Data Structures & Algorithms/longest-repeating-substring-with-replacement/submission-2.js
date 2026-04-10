class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Array(26).fill(0)
        let maxFre =0
        let left =0
        let maxCount =0
        for(let right =0;right <= s.length-1;right++){
            let index = s.charCodeAt(right)-65
            map[index]++
           maxFre= Math.max(maxFre,map[index])

           while((right-left+1)-maxFre > k){
            map[s.charCodeAt(left)-65]--
            left++
           }
         maxCount = Math.max(maxCount,right-left+1)
        }

        return maxCount
    }
}
