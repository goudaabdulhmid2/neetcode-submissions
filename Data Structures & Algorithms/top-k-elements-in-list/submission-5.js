class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let m = new Map();
        let res = []
        

        for(let num of nums){
            if(m.has(num)){
                m.set(num, m.get(num)+1)
               
            }else{
                m.set(num,1);
            }
        }

        while(k--){
            let max = -1001
            let key = -1
            for(let [k,val] of m){
                if(val > max){
                    key = k;
                    max = val
                }
            }
            res.push(key)
            m.delete(key)
        }

        return res


    }
}
