class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // O(N^2)
        // for (let idx = 0; idx < numbers.length; idx++) {
        //     let num = numbers[idx];
        //     let remind = target - num;
            
        //     let idx2 = numbers.findIndex((ele, idxA) => ele === remind && idxA !== idx);
            
        //     if (idx2 !== -1) {
        //         return [idx + 1, idx2 + 1];
        //     }
        // }

        // O(N)
        let l = 0, r = numbers.length - 1
        while(l<r){
            if(numbers[l] + numbers[r] > target) r--
            else if(numbers[l] + numbers[r] < target ) l++
            else return [(l + 1), (r + 1)]
        }
    }
}
