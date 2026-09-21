// Task 14-6: Rubber Duck Debugging

// Problem Statement:
// Explain this function out loud, line by line, to find the bug. It should return true if a string is empty, otherwise false.
// Input
// ""
// "hi"
// Expected Output
// true
// false


// Starter Snippet (buggy):
// Bug: explain this line out loud — what does str.length actually equal for ""?
 
function isEmpty(str) {
  if (str.length === 0) { // find the bug
    return true;
  } else {
    return false;
  }
}
 
console.log(isEmpty(""));  // Expected: true
console.log(isEmpty("hi")); // Expected: false
