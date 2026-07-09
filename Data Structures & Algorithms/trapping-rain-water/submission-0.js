class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
       
       let prefix = [height[0]]

       for(let i = 1; i<height.length; i++){
         prefix[i] = Math.max(prefix[i-1], height[i])
       }

       let sufx = [height[height.length-1]]
       
       for(let i = 1; i<height.length; i++){
        sufx[i] = Math.max(sufx[i-1], height[height.length-i-1])
       }

       sufx.reverse()


       let sum = 0 
       for(let i = 0; i<height.length; i++){
            sum+= Math.min(sufx[i], prefix[i]) - height[i]
       }

       return sum
    }
}
