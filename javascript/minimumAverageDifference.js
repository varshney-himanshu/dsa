/* 
Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
Description:
You are given a 0-indexed integer array nums of length n.

The average difference of the index i is the absolute difference between the average of the first i + 1 elements of nums and the average of the last n - i - 1 elements. Both averages should be rounded down to the nearest integer.

Return the index with the minimum average difference. If there are multiple such indices, return the smallest one.

Time Complexity: O(n)
Space Complexity: O(1)
*/

function minimumAverageDifference(nums) {
  if (nums.length <= 1) {
    return 0;
  }
  let sumFirst = nums[0],
    sumLast = 0,
    lowestAverageIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    sumLast += nums[i];
  }

  let lowestAverage = Math.abs(
    Math.floor(sumFirst / 1) - Math.floor(sumLast / (nums.length - 1))
  );

  for (let i = 1; i < nums.length; i++) {
    sumFirst += nums[i];
    sumLast -= nums[i];

    let temp = Math.abs(
      Math.floor(sumFirst / (i + 1)) -
        Math.floor(sumLast / (nums.length - (i + 1)))
    );
    if (i == nums.length - 1) {
      temp = Math.abs(Math.floor(sumFirst / (i + 1)) - 0);
    }

    if (temp < lowestAverage) {
      lowestAverage = temp;
      lowestAverageIndex = i;
    }
  }

  return lowestAverageIndex;
}
