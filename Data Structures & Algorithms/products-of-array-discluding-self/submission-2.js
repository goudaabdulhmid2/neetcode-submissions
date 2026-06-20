class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix =[...nums];
        const postfix =[...nums].reverse();
        const output = []


        // prefix 
        for(let i = 1; i<nums.length; i++){
           prefix[i]*=prefix[i-1];
           postfix[i]*=postfix[i-1];

        }
        postfix.reverse();

        for(let i = 0; i<nums.length; i++){
           if(i === 0){
                output[i] = postfix[i+1];
                continue;
            }
            if(i === nums.length -1){
                output[i] = prefix[i-1];
                continue;
            }

            output[i] = prefix[i-1] * postfix[i+1];
        }
        
        return output;
    }
}
