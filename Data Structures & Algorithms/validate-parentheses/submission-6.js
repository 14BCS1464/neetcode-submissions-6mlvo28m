class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
      
        let validator=[]
        let validatorStack={
            ")":"(",
            "}":"{",
            "]":"["

        }
        for(let i =0;i<= s.length-1;i++){
            if(s[i] === "(" || s[i] ==="{" || s[i] === "["){
                validator.push(s[i])
            }else {
      if(validator.length === 0) return false
      let top =validator.pop()
  if(top !==  validatorStack[s[i]]) return false
               
            }
            
        }
        return validator.length === 0
    }
}
