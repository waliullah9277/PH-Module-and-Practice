// Task 14-3: Debug a Broken Loop
// Problem Statement:
// This function should return the count of numbers from 1 to n. Right now it never stops (infinite loop) — find out why.
// Input
// 5
// Expected Output
// 5


// Starter Snippet (buggy):
// Bug: this loop never ends — find the missing piece
 
function countUpTo(n) {
  let count = 0;
 
  for (let i = 1; i <= n; i++) { // something is missing here
    // count = count + 1;
    count ++;
  } 
  return count;
}
 
console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)
