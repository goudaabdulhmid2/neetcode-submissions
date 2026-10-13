class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
findMedianSortedArrays(nums1, nums2) {
  let A = nums1;
    let B = nums2;

    if(A.length > B.length){
        [A,B] = [B, A]
    }

    let total = A.length +  B.length
    let half = Math.floor((total)/2);
    let left = 0;
    let right = A.length - 1;

    while(true){
        let i = Math.floor((right + left)/2);
        let j = half - i - 2;

        let Aleft = i < 0 ? - Infinity : A[i]
        let Aright = (i+1) === A.length? Infinity : A[i+1]
        let Bleft = j < 0 ? - Infinity : B[j]
        let Bright = (j+1) === B.length? Infinity : B[j+1] 

        if(Aleft <= Bright && Bleft <= Aright){
            let maxLeft = Math.max(Aleft, Bleft);
            let minRight = Math.min(Aright, Bright);

            if(total % 2 === 0){
                return (maxLeft + minRight) / 2;
            }else{
                return minRight
            }
        }else if (Aleft > Bright){
            right = i -1
        }else{
            left = i + 1
        }


    }
}
}
