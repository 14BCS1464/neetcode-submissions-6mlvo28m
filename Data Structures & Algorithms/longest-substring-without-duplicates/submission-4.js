class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(!s) return 0
        let fre ={}
        let left =0;
        let maxLeft =-Infinity
        for(let i =0;i<= s.length-1;i++){
            let char =s[i]
            if(fre[char] !== undefined  && left  <= fre[char]){
left = fre[char]+1
            }
            fre[char]= i
            maxLeft = Math.max(maxLeft,i-left+1)

        }
        return maxLeft
    }
}
