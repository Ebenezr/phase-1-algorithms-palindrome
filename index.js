function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split('').reverse().join('');
  return reversed === word;

}

/* 
  Add your pseudocode here
  Input: a string
  Output: boolean
  Steps to solve the problem:
  1. convert the string to lowercase
  2. reverse the string
  3. compare the reversed string to the original string
  4. return true if they are the same, false if not


*/

/*
  Add written explanation of your solution here

  my solution is to; 
  convert the string to lowercase.
  reverse the string, 
  and compare the reversed string to the original string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
