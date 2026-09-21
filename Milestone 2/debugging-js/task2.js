// Task 14-2: Debug a Broken Conditional
// Problem Statement:
// This function should return "Pass" if a score is 50 or above, otherwise "Fail". It gives the wrong result for a score of exactly 50.
// Input
// 50
// 40
// Expected Output
// "Pass"
// "Fail"


// Starter Snippet (buggy):
// Bug: find why score = 50 doesn't return "Pass"
 
function checkScore(score) {
  if (score >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
 
console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
console.log(checkScore(40)); // Expected: "Fail"
