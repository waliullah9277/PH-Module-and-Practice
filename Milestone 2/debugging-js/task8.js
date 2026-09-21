// Task 14-8: Apply the Full Debugging Process
// Problem Statement:
// This function should return how many vowels are in a string. Go through the full checklist: does it run? does it crash? is the answer wrong? isolate it with console.log, then fix it.
// Input
// "orange"
// Expected Output
// 3


// Starter Snippet (buggy):
// Apply the full debugging process to find this bug
 
function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
 
  for (let i = 0; i < str.length; i++) { // find the bug
    console.log('i->', i, str[i]);
    
    if (vowels.includes(str[i])) {
      count = count + 1;
    }
  }
 
  return count;
}
 
console.log(countVowels("orange")); // Expected: 3
