class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq = new Map()

        for (const num of nums){
            if(freq.has(num)) return true
            freq.set(num,1)
        }

        return false
        
    }
}
