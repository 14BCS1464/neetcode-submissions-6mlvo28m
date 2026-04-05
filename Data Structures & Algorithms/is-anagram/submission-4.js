class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        return s.split("").sort((a, b) => a - b).sort().join() === t.split("").sort().join()
    }
}
