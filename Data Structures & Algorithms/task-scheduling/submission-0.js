class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let fre={}
        for(let task of tasks){
        
            fre[task]= fre[task] ? fre[task]+1:1
        }

        let values = Object.values(fre)
        let maxFrequ= Math.max(...values)

        let maxFreueCount=0
        for(let val of values){
            if(maxFrequ === val)  maxFreueCount++

        }
        let slot = (maxFrequ-1)*(n+1)+ maxFreueCount
        return Math.max(slot,tasks.length)
    }
}
