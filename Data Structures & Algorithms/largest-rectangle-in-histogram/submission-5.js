class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length
        let stack = []
        let maxArea = 0;

        for(let i =0; i<=n; i++){

            const currentVal = i === n ? 0 : heights[i];

            while(stack.length > 0 && currentVal < heights[stack[stack.length - 1]]){
                const topIndex = stack.pop()
                const width = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)
                const area = heights[topIndex] * width
                maxArea = Math.max(area,maxArea)
            }

            stack.push(i)
        }


        return maxArea

        
    }
}
