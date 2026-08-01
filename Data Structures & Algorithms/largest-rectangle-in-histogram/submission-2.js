class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length
        let stack = []
        let maxArea = 0;

        for(let i =0; i<n; i++){
            const currentVal = heights[i];

            while(stack.length > 0 && currentVal < heights[stack[stack.length - 1]]){
                const topIndex = stack.pop()
                const width = stack.length === 0 ? i : (i - stack[stack.length - 1] - 1)
                const area = heights[topIndex] * width
                maxArea = Math.max(area,maxArea)
            }

            stack.push(i)
        }

        while(stack.length>0){
            const topIndex = stack.pop()
            const h = heights[topIndex]

            const width = stack.length === 0 ? n : (n - stack[stack.length - 1] - 1);
            const area = width * h
            maxArea = Math.max(area,maxArea)
        }

        return maxArea

        
    }
}
