// 14-9C: String Repeat
// Problem Statement: Should return a string repeated a given number of times.
// Input
// "ab", 3
// Expected Output
// "ababab"


// Buggy Code:
function repeatString(str, times) {
  let result = "";
 
  for (let i = 0; i < times; i++) {
    result += str; // find the bug
  }
 
  return result;
}
 
console.log(repeatString("ab", 3)); // Expected: "ababab"
