class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const results = [];
        for(let i = 0; i<nums.length; i++){
            let pro =1;
            for(let j = 0; j<nums.length; j++){
                if(i == j) continue;
                pro*=nums[j];
            }
            results.push(pro);
        }

        return results;
    }
}
