class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let obj ={}

    for (let key of strs) {
        let finalKey = key.split("").sort().join("")
        if (!obj[finalKey]) {
           
            obj[finalKey] = []
        } 
         obj[finalKey].push(key)
    }

    return Object.values(obj)
    
    }
}
