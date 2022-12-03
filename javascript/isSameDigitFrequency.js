/* Problem: Given two positive integers, find out if the two numbers have the same frequency of digits.
   Time Complexity: O(n)
   Space Complexity: O(n) */

function isSameDigitFrequency(num1, num2) {
  let frequency = {};
  let temp = num1;
  while (temp > 0) {
    let num = temp % 10;
    temp = Math.floor(temp / 10);
    frequency[num] = ++frequency[num] || 1;
  }

  temp = num2;
  while (temp > 0) {
    let num = temp % 10;
    temp = Math.floor(temp / 10);
    if (frequency[num] && frequency[num] !== 0) {
      frequency[num]--;
    } else {
      return false;
    }
  }

  const values = Object.values(frequency);

  for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
      return false;
    }
  }

  return true;
}
