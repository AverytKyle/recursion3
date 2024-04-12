/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/


function isSorted(arr) {
  debugger
  let n = arr.length - 1 
  if (n === 1 || n === 0) {
    return true
  }
  if(arr[n] < arr[n-1]) {
    return false
  }
  arr.pop()
  return isSorted(arr)
}




console.log(isSorted([1, 2, 4, 3, 5]))


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
