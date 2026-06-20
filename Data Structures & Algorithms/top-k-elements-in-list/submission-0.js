class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        
        for(const num of nums){
            let freq = map.get(num)||0;
            freq++;
            map.set(num,freq);

        }
        
        let res = [];
        for(let i = 0; i<k; i++){
            let ma = 0;
            let ca = -1;
            for(const [key,value] of map){
                ma = Math.max(ma,value);
                if(ma === value) ca = key;
            }
            res.push(ca);
            map.delete(ca);
        }
        return res;
    }
}
