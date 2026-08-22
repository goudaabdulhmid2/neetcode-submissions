class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        function checkTarget(l, r) {

            while (l <= r) {
                let mid = Math.floor((r + l) / 2);

                if (nums[mid] < target) {
                    l = mid + 1;
                } else if (nums[mid] > target) {
                    r = mid - 1;
                } else {
                    return mid;
                }
            }

            return -1;
        }

        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {

            let mid = Math.floor((r + l) / 2);

            if (nums[mid] === target) {
                return mid;
            }

            // Entire range is sorted
            if (nums[l] <= nums[r]) {
                return checkTarget(l, r);
            }

            // Left half is sorted
            if (nums[l] <= nums[mid]) {

                if (target >= nums[l] && target < nums[mid]) {
                    r = mid - 1;
                    return checkTarget(l, r);
                }

                l = mid + 1;
            }

            // Right half is sorted
            else {

                if (target > nums[mid] && target <= nums[r]) {
                    l = mid + 1;
                    return checkTarget(l, r);
                }

                r = mid - 1;
            }
        }

        return -1;
    }
}