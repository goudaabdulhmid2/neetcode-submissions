class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length-1, res = nums[0], mid = 0

        while(l<=r){
            if(nums[l] < nums[r]){
                res = Math.min(nums[l],res)
                break;

            }

            mid= Math.floor((r+l)/2) 
            res = Math.min(nums[mid],res)

            if(nums[l] <= nums[mid]){
                l = mid + 1;
                
            }else {
                r = mid -1 
            
            }
        }
        return res

       
    }
}
