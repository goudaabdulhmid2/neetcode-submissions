class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleanStr = s.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase()

        let l = 0, r = cleanStr.length - 1

        while(l<r){
            if(cleanStr[l] !== cleanStr[r]){
                return false;
            }
            l++;
            r--;
        }

        return true
    }
}
