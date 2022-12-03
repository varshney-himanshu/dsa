/* Problem: find if two given strings are anagrams
   Note: consider string has only lowercase alphabets
   Time Complexity: O(n)
   Space Complexity: O(n) */

function validAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) {
    return false;
  }

  let letterFrequency = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    letterFrequency[char] = ++letterFrequency[char] || 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!letterFrequency[char] || letterFrequency[char] === 0) {
      return false;
    } else {
      letterFrequency[char]--;
    }
  }

  return true;
}
