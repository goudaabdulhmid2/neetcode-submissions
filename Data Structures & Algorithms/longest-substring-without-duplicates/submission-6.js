class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const check = new Map()

        let l = 0,r= 1, count = 1, maxma = 0

        if(s.length == 0 || s.length == 1) return s.length
        check.set(s[l], 1);
        
        while(r < s.length){
            if(check.get(s[r]) == 1){
                maxma = Math.max(maxma, count)
                while(s[l]!=s[r]){
                    check.set(s[l], 0);
                    l++;
                    count--;
                }
                count--;
                l++;
            }

            check.set(s[r],1)
            r++;
            count++;

        }
            return Math.max(maxma,count)

    }

}
