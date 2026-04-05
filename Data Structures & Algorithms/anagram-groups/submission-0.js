class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freq = {}
  for (let i = 0; i <= strs.length - 1; i++) {
    let key = strs[i].split("").sort().join("")
    if (!freq[key]) {
      freq[key] = []
    }
    freq[key].push(strs[i])
  }
  return Object.values(freq)
    }
}
