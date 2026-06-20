class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const freq = {};
        
        for(const num of nums) {
            if(freq[num]) return true;
            freq[num] = 1;
        }
        
        return false;
    }
}

