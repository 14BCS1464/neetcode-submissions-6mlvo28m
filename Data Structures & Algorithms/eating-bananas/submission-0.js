class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)

        function handleHour(cap){
            let requireHour=0
            for(let pile of piles){
                 requireHour += Math.ceil(pile/cap)
                if(requireHour > h){
                    return false
                }
            }
return  requireHour <= h
        }
        while(left <= right){
            let mid  = Math.floor((left+right)/2)
            if(handleHour(mid)){
             right = mid-1
            }else{
                left = mid+1

            }
        }
        return left
    }
}
