class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = new Map()
        let l = 0;
        let maxFreq = 0;
        let res = 0;

        for(let r = 0; r<s.length; r++){
            const char = s[r];
            count.set(char, (count.get(char) || 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(char));

            while((r - l + 1) - maxFreq > k){
                count.set(s[l], count.get(s[l]) - 1);
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res
        
    }
}
