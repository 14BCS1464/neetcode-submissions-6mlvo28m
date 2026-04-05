class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(arr) {
       let left = 0;
  let right = arr.length - 1
  let maxLeft = 0
  let maxRight = 0
  let totaltrap = 0
  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= maxLeft) maxLeft = arr[left]
      else totaltrap += maxLeft - arr[left]
      left++
    } else {
      if (arr[right] >= maxRight) maxRight = arr[right]
      else totaltrap += maxRight - arr[right]
      right--
    }
  }

  return totaltrap

    }
}
