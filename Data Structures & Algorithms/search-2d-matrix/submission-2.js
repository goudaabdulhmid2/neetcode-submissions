class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
         if (matrix.length === 0) {
            return false
        }
        
        let l = 0, r = matrix.length - 1, mid = Math.floor((l+r)/2), idx = -1


        while(l<=r){
            console.log("mid:" + mid)
            if(target > matrix[mid][ matrix[mid].length - 1] ){
                l = mid + 1;
                mid =  Math.floor((l+r)/2)
            }else if (target < matrix[mid][0]){
                r = mid  - 1;
                mid =  Math.floor((l+r)/2)
            }else{
                idx = mid
                break;

            }
        }
        
       if(idx == -1) return false
       l = 0, r = matrix[idx].length-1, mid = Math.floor((l+r)/2)
       while(l<=r){
        if(matrix[idx][mid] > target){
            r = mid - 1;
            mid = Math.floor((l+r)/2)
        }else if(matrix[idx][mid] < target){
            l= mid + 1;
            mid=  Math.floor((l+r)/2)
        }else{
            return true
        }
       }

       return false
        
    }

}
