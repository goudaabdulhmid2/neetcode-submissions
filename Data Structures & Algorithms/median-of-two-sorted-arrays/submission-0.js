class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
  let B = nums2;

  if (A.length > B.length) {
    [A, B] = [B, A];
  }

  const m = A.length;
  const n = B.length;

  // Number of elements on the left side
  const half = Math.floor((m + n) / 2);

  let left = 0;
  let right = m;

  while (left <= right) {
    // 2. Choose the partition in A
    const i = Math.floor((left + right) / 2);

    // 3. Calculate the partition in B
    const j = half - i;

    // 4. Get the four boundary values
    const Aleft = i === 0 ? -Infinity : A[i - 1];
    const Aright = i === m ? Infinity : A[i];

    const Bleft = j === 0 ? -Infinity : B[j - 1];
    const Bright = j === n ? Infinity : B[j];

    // 5. Check if the partition is correct
    if (Aleft <= Bright && Bleft <= Aright) {
      const maxLeft = Math.max(Aleft, Bleft);
      const minRight = Math.min(Aright, Bright);

      // Odd total: median is the first element on the right
      if ((m + n) % 2 === 1) {
        return minRight;
      }

      // Even total: average the two middle elements
      return (maxLeft + minRight) / 2;
    }

    // 6. Too many elements from A on the left
    if (Aleft > Bright) {
      right = i - 1;
    } else {
      // Too few elements from A on the left
      left = i + 1;
    }
  }
}}
