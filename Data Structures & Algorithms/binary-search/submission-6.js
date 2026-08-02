class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0, right = nums.length - 1, mid = Math.floor((left + right)/2)

        while(left < right){
            if(nums[mid] < target){
                left = mid + 1;
            }else if(nums[mid] > target){
                right = mid;
            }else{
                return mid
            }
            mid =  Math.floor((left + right)/2)
        }

        return nums[left] == target ? left : -1
    }
}
