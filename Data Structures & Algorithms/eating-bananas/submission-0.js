class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {

        function calcK(mid) {
            let k = 0;
            for(let i = 0; i < piles.length; i++) {
                k += Math.ceil(piles[i] / mid);
            }
            return k;
        }

        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while(l <= r) {
            let mid = Math.floor((l + r) / 2); 
            
            let k = calcK(mid);

            if(k > h) {
                l = mid + 1;
            } else {
                res = Math.min(res, mid);
                r = mid - 1;
            }
        }

        return res;


    }
}
