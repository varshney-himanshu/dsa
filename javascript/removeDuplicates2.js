/* 
problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

Time Complexity: O(n)
Space Complexity: O(1)
*/

function removeDuplicates2(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let i = 0,
    j = 1,
    duplicateCount = 0;

  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
      duplicateCount = 0;
    } else {
      if (duplicateCount === 0) {
        i++;
        duplicateCount++;
        nums[i] = nums[j];
      }
    }
    j++;
  }

  return i + 1;
}
