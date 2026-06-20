class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = new Map()
        for(let str of strs){
            let code = str.split('').sort().join('')
            if(hash.has(code)){
                hash.get(code).push(str)
            }else{
                hash.set(code, [str])
            }

        }

        let result = []
        for(let [key,value] of hash){
            result.push(value)
        }

        return result
    }
}