/* 
problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Time Complexity: O(n)
Space Complexity: O(1)
*/

function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    } else {
      j++;
    }
  }
  return i + 1;
}
