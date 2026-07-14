class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let oparnd = []
        let a,b;

        for(let i= 0; i<tokens.length; i++){
            switch(tokens[i]){
                case '+':
                    b = oparnd.pop()
                    a = oparnd.pop()
                    oparnd.push(b+a)
                    break;
                case '-':
                    b = oparnd.pop()
                    a = oparnd.pop()
                    oparnd.push(a-b)
                    break;
                case '*':
                    b = oparnd.pop()
                    a = oparnd.pop()
                    oparnd.push(a*b)
                    break;
                case '/':
                    b = oparnd.pop()
                    a = oparnd.pop()
                    oparnd.push(Math.trunc(a/b))
                    break;
                default:
                    oparnd.push(Number(tokens[i]))

                    
            }

        }
        return oparnd.pop()
    }
}
