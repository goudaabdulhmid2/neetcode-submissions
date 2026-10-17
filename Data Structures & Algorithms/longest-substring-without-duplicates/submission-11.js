class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const check = new Map()

        let l = 0,r= 1, maxma = 0

        if(s.length < 2) return s.length
        check.set(s[l], l);
        
        while(r < s.length){
            if(check.has(s[r])){
                l = Math.max(l,check.get(s[r]) + 1);
            }

            maxma = Math.max(maxma, r - l + 1)
            
            check.set(s[r],r)
            r++;

        }
            return maxma

    }

}
