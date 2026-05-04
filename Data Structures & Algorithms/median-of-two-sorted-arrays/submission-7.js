class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(A, B) {
        if (A.length > B.length) {
            return this.findMedianSortedArrays(B, A);
        }
        let x = A.length;
        let y = B.length;
        let low = 0;
        let high = x;
        while (low <= high) {
            let cut1 = Math.floor((low + high) / 2);
            let cut2 = Math.floor((x + y + 1) / 2) - cut1;

            let l1 = cut1 === 0 ? -Infinity : A[cut1 - 1];
            let r1 = cut1 === x ? Infinity : A[cut1];

            let l2 = cut2 === 0 ? -Infinity : B[cut2 - 1];
            let r2 = cut2 === y ? Infinity : B[cut2];

            if (l1 <= r2 && l2 <= r1) {
                if ((x + y) % 2 === 0) {
                    return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
                } else {
                    return Math.max(l1, l2);
                }
            } else if (l1 > r2) {
                high = cut1 - 1;
            } else {
                low = cut1 + 1;
            }
        }
    }
}
