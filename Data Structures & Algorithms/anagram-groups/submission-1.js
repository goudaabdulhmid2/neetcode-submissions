class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for(const str of strs){
            const key = str.split('').sort().join('');

            const group = map.get(key) || [];
            group.push(str);

            map.set(key,group);
        }

        return Array.from(map.values());
    }
}
