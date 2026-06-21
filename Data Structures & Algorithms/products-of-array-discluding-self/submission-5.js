class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let sufx = [1]
        let pre = [1]
        for(let i = 0; i<nums.length; i++){
            pre.push(pre[i] * nums[i]) 
            sufx[i] = 1;
        }
        sufx.push(1)
        pre.splice(0,1)
        pre.push(1)
        for(let i = nums.length - 1; i>= 0 ; i--){
            sufx[i]= (sufx[i + 1] * nums[i]) 
        }

        let res = []
        let i = nums.length - 1
        while(1){
            if(i == 0 ){
                res.push(sufx[i+1])
                break
            }
            res.push(sufx[i+1] * pre[i-1]);
            i--;
            
        }



        return res.reverse()
    }
}
