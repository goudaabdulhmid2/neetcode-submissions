class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length < 2) return nums.length

        let temp =new Int32Array(nums).sort((a,b)=> a-b);
        let maxLength = 1, currentLen = 1

        for(let i = 1; i<temp.length; i++){
            let diff = temp[i] - temp[i-1];

            if(diff === 1){
                currentLen++
            }else if(diff > 0){
                maxLength = Math.max(maxLength, currentLen)
                currentLen = 1
            }
        }

        return Math.max(currentLen, maxLength)

        
    

        
    }
}
