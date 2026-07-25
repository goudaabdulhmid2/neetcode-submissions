class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let res = 0;

        for(let i=0; i<heights.length; i++){
            let min = heights[i];
            for(let j=i; j>=0; j--){
                min = Math.min(min, heights[j]);
                res = Math.max(res, min * (i-j+1))
            }
        }

        return res
    }
}
