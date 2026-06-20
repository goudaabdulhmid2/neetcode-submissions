class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        return strs.length + '\t' + strs.join('\t')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         let arr = str.split('\t')
         if(arr[0] == 0) return []

         return arr.splice(1)
    }
}
