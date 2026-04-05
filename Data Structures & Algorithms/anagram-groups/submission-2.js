class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let fre={}
        for(let i = 0;i<= strs.length-1;i++){
            
            let key = strs[i].split("").sort().join("")
            if(!fre[key])  {
    fre[key]=[]
}
fre[key].push(strs[i])



        }
        return Object.values(fre)
    }
}
