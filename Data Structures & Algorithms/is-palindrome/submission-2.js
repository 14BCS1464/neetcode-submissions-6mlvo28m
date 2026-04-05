class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
         let str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

let start =0;
let end = str.length-1
while(start <= end){
  if(str[start] != str[end]) {
    return false
    }
    else{
      start++
      end--
    }
}
return true
    }
}
