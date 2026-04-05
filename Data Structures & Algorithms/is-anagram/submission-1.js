class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return  s.split("").sort().reverse().join()   === t.split("").sort().reverse().join() 
    }
}
